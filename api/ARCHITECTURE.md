# API Architecture

## Overview

```
POST /parse          → Markdown string → sanitized HTML (KaTeX math, GFM, directives)
GET  /content        → list all content items
GET  /content/:slug  → full item + server-rendered HTML
GET  /metrics        → runtime snapshot
GET  /health         → liveness probe (public)
```

## Request lifecycle

```
Request
  │
  ├─ requestId middleware     (attach UUID, set X-Request-Id header)
  ├─ cors middleware          (restrict to configured origins)
  ├─ security middleware      (CSP, X-Frame-Options, HSTS in prod, ...)
  ├─ countRequests middleware (increment counters for /metrics)
  ├─ logger middleware        (structured JSON log after response)
  ├─ bodySize guard           (reject if Content-Length > BODY_LIMIT)
  │
  ├─ [public] GET /health     → immediate response
  │
  └─ [protected]
       ├─ auth middleware      (validate x-api-key header via SHA-256 compare)
       ├─ rateLimit middleware (sliding window per key-id, set X-RateLimit-* headers)
       └─ route handler
```

## File map

| File                                | Responsibility                                                       |
| ----------------------------------- | -------------------------------------------------------------------- |
| `src/index.ts`                      | Hono app assembly, `Bun.serve`, bootstrap                            |
| `src/config/index.ts`               | Typed env config — single source of truth                            |
| `src/types/index.ts`                | All shared TypeScript interfaces                                     |
| `src/routes/index.ts`               | Mount public + protected sub-routers                                 |
| `src/routes/parse.ts`               | `POST /parse` — validate input (Zod), cache, call markdown service   |
| `src/routes/content.ts`             | `GET /content[/:slug]` — load content, run through markdown pipeline |
| `src/routes/metrics.ts`             | `GET /metrics` — assemble snapshot from counters                     |
| `src/middlewares/auth.ts`           | API key validation + rate limit header injection                     |
| `src/middlewares/requestCounter.ts` | Shared counter object read by `/metrics`                             |
| `src/services/apiKeys.ts`           | `ApiKeyService` — hashed key map, `validate()`                       |
| `src/services/rateLimit.ts`         | `MemoryRateLimitStore` implementing `RateLimitStore` interface       |
| `src/services/cache.ts`             | `MemoryCache<T>` with TTL + size eviction                            |
| `src/services/markdown.ts`          | `unified` pipeline — remark → rehype → KaTeX → sanitize → stringify  |
| `src/services/content.ts`           | Load `contents.json`, `blocksToMarkdown()` converter                 |
| `src/utils/crypto.ts`               | `sha256Hex`, `constantTimeEqual`, `maskKey`                          |
| `src/utils/errors.ts`               | `AppError`, `Errors` factory, `errorResponse()`                      |
| `src/utils/response.ts`             | `ok()` — wrap data in `ApiResponse<T>` envelope                      |

## Content pipeline

The client stores content as a JSON block tree in `client/constants/contents.json`:

```
ContentItem.content[]           (JSON blocks)
    │
    ▼ blocksToMarkdown()         (src/services/content.ts)
    │
remark directive markdown string
    │ ::Shell{type="open"}
    │ ::H2[Tabella delle Derivate]
    │ ::MathML[\frac{d}{dx}x^n = nx^{n-1}]
    │ ::Box{type="open" variant="theory"}
    │ ::Box{type="close"}
    │ ::Shell{type="close"}
    │
    ▼ parseMarkdown(md, directives=true)  (src/services/markdown.ts)
    │
    ├─ remarkParse
    ├─ remarkGfm
    ├─ remarkDirective
    ├─ remarkClientDirectives   (custom plugin: ::Component → HTML tag + class)
    ├─ remarkMath               ($...$ inline, $$...$$ block)
    ├─ remarkRehype
    ├─ rehypeKatex              (render math to HTML)
    ├─ rehypeSanitize           (XSS-safe, extended schema for KaTeX + div)
    └─ rehypeStringify
    │
    ▼ sanitized HTML string     (cached in MemoryCache, TTL 30 min)
```

## Swapping in Redis

### Rate limiter

1. Implement `RateLimitStore` (see `src/types/index.ts`)
2. Replace `export const rateLimitStore` in `src/services/rateLimit.ts`
3. A commented Redis template is included in that file

### Cache

1. Implement `CacheAdapter<T>` (comment at bottom of `src/services/cache.ts`)
2. Replace `markdownCache` usages in `src/routes/parse.ts` and `src/routes/content.ts`

## Security posture

| Concern           | Mitigation                                                    |
| ----------------- | ------------------------------------------------------------- |
| API key exposure  | SHA-256 hashed at rest, masked in logs, constant-time compare |
| XSS               | `rehype-sanitize` on all HTML output                          |
| Injection         | Zod schema validation on all inputs                           |
| Payload DoS       | `BODY_LIMIT` guard before parsing                             |
| Rate abuse        | Sliding window per key, configurable per-key limits           |
| CORS              | Explicit allowlist, credentials: true only for listed origins |
| Clickjacking      | `X-Frame-Options: DENY`                                       |
| Sniffing          | `X-Content-Type-Options: nosniff`                             |
| HTTPS enforcement | `Strict-Transport-Security` in production                     |
| CSP               | Restrictive default, `style-src unsafe-inline` for KaTeX only |

## Environment variables

| Variable               | Default                             | Description                               |
| ---------------------- | ----------------------------------- | ----------------------------------------- |
| `PORT`                 | `4001`                              | Server port                               |
| `NODE_ENV`             | `development`                       | `development` \| `production`             |
| `API_KEYS`             | —                                   | JSON array of `{id, hash, rateLimit?}`    |
| `RATE_LIMIT_WINDOW_MS` | `60000`                             | Sliding window size (ms)                  |
| `RATE_LIMIT_MAX`       | `100`                               | Max requests per window (global fallback) |
| `CORS_ORIGINS`         | `http://localhost:3000`             | Comma-separated allowed origins           |
| `CACHE_TTL_MS`         | `1800000`                           | Cache TTL (30 min)                        |
| `CACHE_MAX_SIZE`       | `1000`                              | Max cache entries                         |
| `BODY_LIMIT`           | `1048576`                           | Max body size (bytes, 1 MB)               |
| `LOG_LEVEL`            | `info`                              | `debug` \| `info` \| `warn` \| `error`    |
| `CONTENTS_PATH`        | `../client/constants/contents.json` | Path to compiled content                  |

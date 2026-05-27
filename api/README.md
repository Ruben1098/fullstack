# Instanswer API

Production-ready Markdown processing & content API built with **Bun** + **Hono** + **TypeScript**.

## Setup

```bash
cd api
cp .env.example .env   # fill in your values
bun install
bun run dev
```

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `bun run dev`   | Hot-reload dev server          |
| `bun run build` | Compile to `dist/`             |
| `bun run start` | Production server from `dist/` |

## Generate & hash an API key

```bash
# 1. Generate a random key
bun -e "console.log(crypto.randomUUID())"
# → e.g. b3e9f1a2-...

# 2. Hash it (SHA-256 hex)
bun -e "
const k = 'b3e9f1a2-your-key-here';
const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(k));
console.log(Buffer.from(buf).toString('hex'));
"

# 3. Add to .env:
# API_KEYS=[{"id":"my-key","hash":"<hash>","rateLimit":200}]
```

## Endpoints

All endpoints except `/health` require `x-api-key` header.

### `GET /health`

```json
{ "status": "ok", "ts": "2026-05-06T16:00:00.000Z" }
```

### `POST /parse`

Convert Markdown → sanitized HTML.

```bash
curl -X POST http://localhost:4001/parse \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_RAW_KEY" \
  -d '{"markdown": "# Hello\n\n$E = mc^2$", "directives": false}'
```

```json
{
	"data": {
		"html": "<h1>Hello</h1>\n<p><span class=\"katex\">...</span></p>",
		"processingMs": 12
	},
	"requestId": "uuid"
}
```

Set `"directives": true` to enable the `::Component{props}` syntax used in content files.

### `GET /content`

List all content items (metadata only, no HTML body).

```bash
curl http://localhost:4001/content -H "x-api-key: YOUR_RAW_KEY"
```

### `GET /content/:slug`

Full content item with server-rendered HTML.

```bash
curl http://localhost:4001/content/derivate-fondamentali-tabella-formule \
  -H "x-api-key: YOUR_RAW_KEY"
```

```json
{
  "data": {
    "slug": "derivate-fondamentali-tabella-formule",
    "title": "...",
    "html": "<div class=\"md-shell\">...</div>",
    "faqs": [...]
  }
}
```

### `GET /metrics`

Runtime observability snapshot.

```bash
curl http://localhost:4001/metrics -H "x-api-key: YOUR_RAW_KEY"
```

```json
{
	"data": {
		"uptime": 3600,
		"requests": { "total": 1200, "success": 1180, "errors": 20 },
		"cache": { "hits": 980, "misses": 220, "size": 45 },
		"rateLimit": { "rejected": 3 },
		"memory": { "heapUsedMB": 42, "rssMB": 88 }
	}
}
```

## Rate limit headers

Every protected response includes:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 97
X-RateLimit-Reset: 1746547200   (Unix seconds)
Retry-After: 43
```

## Error format

```json
{
	"error": "Invalid or missing API key",
	"code": "UNAUTHORIZED",
	"requestId": "uuid"
}
```

| Code               | HTTP |
| ------------------ | ---- |
| `UNAUTHORIZED`     | 401  |
| `FORBIDDEN`        | 403  |
| `RATE_LIMITED`     | 429  |
| `VALIDATION_ERROR` | 400  |
| `NOT_FOUND`        | 404  |
| `INTERNAL_ERROR`   | 500  |

## Swap in Redis (rate limiter)

Implement `RateLimitStore` from `src/types/index.ts` and replace the singleton in `src/services/rateLimit.ts`. The interface is documented inline with
a commented Redis example.

## Swap in Redis (cache)

Implement `CacheAdapter<T>` shown as a comment at the bottom of `src/services/cache.ts` and replace `markdownCache`.

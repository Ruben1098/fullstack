import { Hono } from 'hono';
import parseRoute from './parse.ts';
import contentRoute from './content.ts';
import metricsRoute from './metrics.ts';
import { auth, rateLimit } from '@/middlewares/auth.ts';

const router = new Hono();

// ─── Public ──────────────────────────────────────────────────────────────────

router.get('/health', c => c.json({ status: 'ok', ts: new Date().toISOString() }));

// ─── Protected ───────────────────────────────────────────────────────────────

const api = new Hono();
api.use('*', auth);
api.use('*', rateLimit);

api.route('/parse', parseRoute);
api.route('/content', contentRoute);
api.route('/metrics', metricsRoute);

router.route('/', api);

export default router;

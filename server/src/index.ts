import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { auth } from './lib/auth.js';
import { env } from './lib/env.js';
import route from './routes/route.js';

const app = new Hono();

app.use(logger());
app.use(
	'/*',
	cors({
		origin: env.CORS_ORIGIN || '',
		allowMethods: ['GET', 'POST', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	})
);

app.on(['POST', 'GET'], '/api/auth/**', (c) => auth.handler(c.req.raw));

app.route('/', route);

export default {
	port: 3000,
	fetch: app.fetch,
};

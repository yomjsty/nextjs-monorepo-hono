import { Hono } from 'hono';
import { auth } from '../lib/auth.js';

const protectedRoute = new Hono();

protectedRoute.get('/', async (c) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		return c.json({ message: 'Unauthorized' }, 401);
	}

	return c.json(
		{
			message: 'Protected route, requires authentication',
			user: session.user,
		},
		200
	);
});

export default protectedRoute;

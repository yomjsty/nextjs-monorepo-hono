import { Hono } from 'hono';

const normalRoute = new Hono();

normalRoute.get('/', (c) => {
	return c.json({
		message: 'Normal route, not protected',
	});
});

export default normalRoute;

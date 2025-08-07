import { Hono } from 'hono';
import normalRoute from './normal.route.js';
import protectedRoute from './protected.route.js';

const route = new Hono();

route.route('/normal', normalRoute);
route.route('/protected', protectedRoute);

export default route;

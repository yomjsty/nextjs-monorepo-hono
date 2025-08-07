import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../lib/env.js';

// export const db = drizzle(env.DATABASE_URL);

const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql });

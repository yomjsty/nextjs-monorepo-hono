import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../db/index.js';
import { schema } from '../db/schema.js';
import { env } from './env.js';

export const auth = betterAuth({
	appName: env.PUBLIC_APP_NAME,
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	secret: env.BETTER_AUTH_SECRET,
	baseURL: env.BETTER_AUTH_URL,
	trustedOrigins: [env.CORS_ORIGIN || ''],
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		},
	},
});

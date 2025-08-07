import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
	server: {
		DATABASE_URL: z.url(),
		BETTER_AUTH_SECRET: z.string(),
		BETTER_AUTH_URL: z.url(),
		CORS_ORIGIN: z.url(),
		GITHUB_CLIENT_ID: z.string(),
		GITHUB_CLIENT_SECRET: z.string(),
	},

	clientPrefix: 'PUBLIC_',

	client: {
		PUBLIC_APP_NAME: z.string(),
	},

	runtimeEnv: process.env,

	emptyStringAsUndefined: true,
});

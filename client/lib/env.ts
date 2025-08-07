import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {},

	client: {
		NEXT_PUBLIC_SERVER_URL: z.url(),
	},

	experimental__runtimeEnv: {
		NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
	},
});

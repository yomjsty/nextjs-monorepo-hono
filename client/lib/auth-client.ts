import { createAuthClient } from 'better-auth/react';
import { env } from './env';

export const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_SERVER_URL,
	fetchOptions: {
		credentials: 'include',
	},
});

export const { signIn, signUp, useSession, signOut } = authClient;

export const Session = authClient.$Infer.Session;

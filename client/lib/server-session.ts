import { cookies } from 'next/headers';
import type { Session } from './auth-client';
import { env } from './env';

export default async function getServerSession(): Promise<
	typeof Session | null
> {
	try {
		const cookieHeader = (await cookies()).toString();

		const res = await fetch(
			`${env.NEXT_PUBLIC_SERVER_URL}/api/auth/get-session`,
			{
				credentials: 'include',
				headers: {
					Cookie: cookieHeader,
				},
			}
		);

		return res.json();
	} catch {
		return null;
	}
}

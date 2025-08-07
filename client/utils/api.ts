import { env } from '@/lib/env';

export const API_URL = env.NEXT_PUBLIC_SERVER_URL;

export async function apiFetch<T>(
	path: string,
	options?: RequestInit
): Promise<T> {
	const res = await fetch(`${API_URL}/api/${path}`, {
		credentials: 'include',
		...options,
		headers: {
			'Content-Type': 'application/json',
			...(options?.headers ?? {}),
		},
	});

	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		throw new Error(err.message || 'Something went wrong');
	}

	return res.json();
}

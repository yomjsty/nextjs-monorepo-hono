import { cookies } from 'next/headers';
import { env } from '@/lib/env';

const fetchProtected = async () => {
	try {
		const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/protected`, {
			credentials: 'include',
			headers: {
				Cookie: (await cookies()).toString(),
			},
		});
		return res.json();
	} catch {
		return { message: 'Error fetching protected route' };
	}
};

export default async function ProtectedRoute() {
	const data = await fetchProtected();
	return (
		<div>
			<h1>Protected Route</h1>
			<p>{data.message}</p>
		</div>
	);
}

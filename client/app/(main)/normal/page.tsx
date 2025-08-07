import { env } from '@/lib/env';

const fetchNormal = async () => {
	try {
		const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/normal`);
		return res.json();
	} catch {
		return { message: 'Error fetching normal route' };
	}
};

export default async function NormalRoute() {
	const data = await fetchNormal();
	return (
		<div>
			<h1>Normal Route</h1>
			<p>{data.message}</p>
		</div>
	);
}

import Link from 'next/link';
import { SignoutButton } from '@/components/SignoutButton';
import getServerSession from '@/lib/server-session';

export default async function Home() {
	const session = await getServerSession();

	return (
		<div className="flex h-screen flex-col items-center justify-center space-y-4">
			{session ? (
				<>
					You are signed in as {session.user.name}.{' '}
					<SignoutButton description="Logout" />
				</>
			) : (
				<>
					<Link href="/login">Login</Link>
					<Link href="/register">Register</Link>
				</>
			)}
			<div className="flex flex-col gap-2">
				<Link href="/protected">Fetch data from protected route</Link>
				<Link href="/normal">Fetch data from non-protected route</Link>
			</div>
		</div>
	);
}

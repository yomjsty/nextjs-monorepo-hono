'use client';

import { LayoutDashboardIcon } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { SignoutButton } from '../components/SignoutButton';

export default function Home() {
	const { data: session, isPending } = authClient.useSession();

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="font-bold text-2xl">Home</h1>
			<p>
				Playing with <span className="font-medium">Better-Auth</span> on{' '}
				<span className="font-medium">
					Next.js and Hono as a backend
				</span>
			</p>
			{isPending && null}
			{!isPending && session && (
				<div className="flex gap-2">
					<Link
						className={cn(buttonVariants({ variant: 'outline' }))}
						href="/dashboard"
					>
						<LayoutDashboardIcon className="size-4" />
						Dashboard
					</Link>
					<SignoutButton />
				</div>
			)}
			{!(isPending || session) && (
				<Link
					className={cn(buttonVariants({ variant: 'outline' }))}
					href="/login"
				>
					Login
				</Link>
			)}
		</div>
	);
}

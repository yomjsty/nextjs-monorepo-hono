import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative mx-auto flex min-h-[calc(100vh-75px)] w-full items-center justify-center">
			<main className="w-full max-w-md space-y-4 px-4 py-10 md:py-4">
				<div className="flex items-center justify-between">
					<Link
						className={cn(buttonVariants({ variant: 'outline' }))}
						href="/"
					>
						<ArrowLeftIcon className="h-4 w-4" />
						Home
					</Link>
					<ModeToggle />
				</div>
				{children}
			</main>
		</div>
	);
}

'use client';

import { LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSignOut } from '@/hooks/use-signout';

interface SignoutButtonProps {
	hideDescriptionOnMobile?: boolean;
	description?: string;
}

export function SignoutButton({
	description,
	hideDescriptionOnMobile = false,
}: SignoutButtonProps) {
	const handleSignout = useSignOut();

	return (
		<Button onClick={handleSignout} variant="outline">
			<LogOutIcon className="size-4 rotate-180" />
			{hideDescriptionOnMobile === true ? (
				<span className="hidden md:block">{description}</span>
			) : (
				<span>{description}</span>
			)}
		</Button>
	);
}

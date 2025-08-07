'use client';

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/api/getProfile';

export default function ProfilePage() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error: {(error as Error).message}</div>;
	}

	return <div>Hello, {data?.name}</div>;
}

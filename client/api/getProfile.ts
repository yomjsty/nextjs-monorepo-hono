import { apiFetch } from '@/utils/api';

export function getProfile() {
	return apiFetch<{ id: string; name: string }>('profile');
}

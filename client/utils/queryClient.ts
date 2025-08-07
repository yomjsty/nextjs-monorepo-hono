import { QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			toast.error(`Error: ${(error as Error).message}`, {
				action: {
					label: 'retry',
					onClick: () => {
						queryClient.invalidateQueries();
					},
				},
			});
		},
	}),
});

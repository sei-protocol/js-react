import { useEffect, useState } from 'react';
import { QueryClient } from '@sei-js/core';

const useQueryClient = (rpcAddress: string) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [queryClient, setQueryClient] = useState<any>();


	useEffect(() => {
		const getClient = async () => {
			return await QueryClient.getQueryClient(rpcAddress);
		};

		setIsLoading(true);

		getClient().then((client) => {
			setQueryClient(client);
			setIsLoading(false);
		});
	}, [rpcAddress]);

	return { queryClient, isLoading };
};

export default useQueryClient;

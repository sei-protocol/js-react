import { useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core/queryClient';

const useQueryClient = (rpcAddress: string) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [queryClient, setQueryClient] = useState<any>();


	useEffect(() => {
		const getClient = async () => {
			return await getQueryClient(rpcAddress);
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

import React, { useEffect, useState } from 'react';
import { SigningClient } from '@sei-js/core';

const useSigningClient = (rpcAddress: string, offlineSigner: any) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [signingClient, setSigningClient] = useState<any>();

	useEffect(() => {
		const getClient = async () => {
			return await SigningClient.getSigningClient(rpcAddress, offlineSigner);
		};

		setIsLoading(true);

		getClient().then((client) => {
			setSigningClient(client);
			setIsLoading(false);
		});
	}, [rpcAddress, offlineSigner]);

	return { signingClient, isLoading };
};

export default useSigningClient;

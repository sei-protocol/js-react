import { useSigningClient } from '../useSigningClient';
import { useQueryClient } from '../useQueryClient';

const useClient = (rpcAddress: string, offlineSigner: any) => {
	const { signingClient } = useSigningClient(rpcAddress, offlineSigner);
	const { queryClient } = useQueryClient(rpcAddress);

	return { signingClient, queryClient };
};

export default useClient;

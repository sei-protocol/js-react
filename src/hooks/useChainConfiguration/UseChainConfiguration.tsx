import { useEffect } from 'react';
import { ChainConfiguration } from '../../types/config';
import { useSetRecoilState } from 'recoil';
import { chainConfigurationAtom } from '../../atoms/config';

const useChainConfiguration = (chainConfiguration: ChainConfiguration) => {
	const setChainConfiguration = useSetRecoilState(chainConfigurationAtom)

	useEffect(() => {
		setChainConfiguration(chainConfiguration)
	}, [chainConfiguration]);

	return;
};

export default useChainConfiguration;

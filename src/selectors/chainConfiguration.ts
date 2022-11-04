import { selector } from 'recoil';
import { chainConfigurationAtom } from '../atoms/config';

export const chainIdSelector = selector<string>({
	key: 'chainIdSelector',
	get: ({ get }) => {
		const chainConfiguration = get(chainConfigurationAtom);
		if(chainConfiguration === 'testnet') return 'atlantic-1'
		if(chainConfiguration === 'devnet') return 'sei-devnet-1'
		return chainConfiguration.chainId;
	}
});

export const restUrlSelector = selector<string>({
	key: 'restUrlSelector',
	get: ({ get }) => {
		const chainConfiguration = get(chainConfigurationAtom);
		if(chainConfiguration === 'testnet') return 'https://sei-chain-incentivized.com/sei-chain-app'
		if(chainConfiguration === 'devnet') return 'https://sei-chain-devnet.com/sei-chain-app'
		return chainConfiguration.restUrl;
	}
});

export const rpcUrlSelector = selector<string>({
	key: 'rpcUrlSelector',
	get: ({ get }) => {
		const chainConfiguration = get(chainConfigurationAtom);
		if(chainConfiguration === 'testnet') return 'https://sei-chain-incentivized.com/sei-chain-tm/'
		if(chainConfiguration === 'devnet') return 'https://sei-chain-devnet.com/sei-chain-tm/'
		return chainConfiguration.restUrl;
	}
});

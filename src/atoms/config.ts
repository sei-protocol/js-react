import { atom } from 'recoil';
import { ChainConfiguration } from '../types/config';

export const chainConfigurationAtom = atom<ChainConfiguration>({
	key: 'chainConfiguration',
	default: 'testnet'
});

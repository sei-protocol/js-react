import {WalletAccount, WalletWindowKey} from "@sei-js/core/wallet";
import { ChainConfiguration } from '../../types/config';

export type UseWalletOptions = {
  autoConnect?: boolean;
  chainConfiguration: ChainConfiguration;
  inputWallet: WalletWindowKey
}

export type UseWallet = {
  connectedWallet?: WalletWindowKey;
  connect: () => Promise<any>;
  disconnect: () => void;
  chainId: string;
  supportedWallets: WalletWindowKey[];
  installedWallets: WalletWindowKey[];
  error?: string;
  offlineSigner?: any;
  accounts?: WalletAccount[];
};

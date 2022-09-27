import {WalletAccount, WalletWindowKey} from "@sei-js/core/wallet";

export type UseWallet = {
  connectedWallet?: WalletWindowKey;
  connect: () => Promise<any>;
  disconnect: () => void;
  supportedWallets: WalletWindowKey[];
  installedWallets: WalletWindowKey[];
  error?: string;
  offlineSigner?: any;
  accounts?: WalletAccount[];
};

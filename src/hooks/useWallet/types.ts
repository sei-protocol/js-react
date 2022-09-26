export type WalletWindowKey = "keplr" | "leap" | "cosmostation" | "falcon";

export type SupportedWallet = {
  windowKey: WalletWindowKey;
};

export type UseWallet = {
  connectedWallet?: WalletWindowKey;
  connect: () => Promise<any>;
  disconnect: () => void;
  supportedWallets: WalletWindowKey[];
  installedWallets: WalletWindowKey[];
  error?: string;
  offlineSigner?: any;
  accounts?: Account[];
};

export type Account = {
  address: string;
  algo: string;
  pubkey: Uint8Array;
};

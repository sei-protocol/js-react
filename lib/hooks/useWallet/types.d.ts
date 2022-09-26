export declare type WalletWindowKey = "keplr" | "leap";
export declare type SupportedWallet = {
    windowKey: WalletWindowKey;
};
export declare type UseWallet = {
    connectedWallet?: WalletWindowKey;
    connect: () => Promise<any>;
    disconnect: () => void;
    supportedWallets: WalletWindowKey[];
    installedWallets: WalletWindowKey[];
    error?: string;
    offlineSigner?: any;
    accounts?: Account[];
};
export declare type Account = {
    address: string;
    algo: string;
    pubkey: Uint8Array;
};

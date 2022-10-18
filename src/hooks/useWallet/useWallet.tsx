import React, {useCallback, useEffect, useMemo, useState} from "react";
import {UseWallet} from "./types";
import {
    connect as connectWallet,
    SUPPORTED_WALLETS,
    WalletAccount, WalletWindowKey,
} from "@sei-js/core/wallet";


const useWallet: (inputWallet: WalletWindowKey, autoConnect?: boolean) => UseWallet = (
    inputWallet,
    autoConnect = false
) => {
    const [offlineSigner, setOfflineSigner] = useState<any | undefined>();
    const [accounts, setAccounts] = useState<WalletAccount[]>([]);
    const [connectedWallet, setConnectedWallet] = useState<WalletWindowKey | undefined>();

    const installedWallets = useMemo(
        () =>
            SUPPORTED_WALLETS.filter((wallet) => window[wallet.windowKey]).map(
                (wallet) => wallet.windowKey
            ),
        []
    );

    const connect = useCallback(async () => {
        const initConnection = async () => {
            const {offlineSigner, accounts} = await connectWallet(inputWallet).then()
            setOfflineSigner(offlineSigner);
            setAccounts(accounts);
        };

        initConnection().then();
    }, [inputWallet])

    const disconnect = useCallback(() => {
        setConnectedWallet(undefined)
        setAccounts([])
        setOfflineSigner(undefined)
    }, [])

    useEffect(() => {
        if (autoConnect) {
            connect().then(() => setConnectedWallet(inputWallet))
        }

    }, [autoConnect])

    if (!inputWallet)
        return {
            connect,
            disconnect,
            error: "No wallet defined.",
            supportedWallets: SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
            installedWallets,
        };

    return {
        connect,
        disconnect,
        supportedWallets: SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
        installedWallets,
        offlineSigner,
        accounts,
        connectedWallet,
    };
};

export default useWallet;

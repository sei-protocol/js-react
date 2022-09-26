import React, {useCallback, useEffect, useMemo, useState} from "react";
import {WalletWindowKey, UseWallet} from "./types";
import {SUPPORTED_WALLETS} from "./supportedWallets";
import {KEPLR_CHAIN_SUGGEST} from "./config";


const useWallet: (inputWallet: WalletWindowKey, autoConnect?: boolean) => UseWallet = (
    inputWallet,
    autoConnect = false
) => {
    const [offlineSigner, setOfflineSigner] = useState<any | undefined>();
    const [accounts, setAccounts] = useState([]);
    const [connectedWallet, setConnectedWallet] = useState<WalletWindowKey | undefined>();

    const installedWallets = useMemo(
        () =>
            SUPPORTED_WALLETS.filter((wallet) => window[wallet.windowKey]).map(
                (wallet) => wallet.windowKey
            ),
        []
    );

    const connect = useCallback(async () => {
        switch (inputWallet) {
            case "keplr":
                await window.keplr.experimentalSuggestChain(KEPLR_CHAIN_SUGGEST);
                break;

        }
        const getInfo = async () => {
            const offlineSigner = await window[inputWallet].getOfflineSigner('atlantic-1');
            const accounts = await offlineSigner.getAccounts();

            setOfflineSigner(offlineSigner);
            setAccounts(accounts);
        };
        getInfo().then();
    }, [])

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

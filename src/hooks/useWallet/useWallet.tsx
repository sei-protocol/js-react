import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { UseWallet, UseWalletOptions } from './types';
import { connect as connectWallet, SUPPORTED_WALLETS, WalletAccount, WalletWindowKey } from '@sei-js/core/wallet';

const useWallet: (window: any, walletOptions: UseWalletOptions) => UseWallet = (window, walletOptions) => {
	const { inputWallet, autoConnect } = walletOptions;

	const chainId = useMemo(() => {
		const { chainConfiguration } = walletOptions;
		if(chainConfiguration === 'testnet') return 'atlantic-1'
		if(chainConfiguration === 'devnet') return 'sei-devnet-1'
		return chainConfiguration.chainId;

	}, [walletOptions.chainConfiguration])

	const restUrl = useMemo(() => {
		const { chainConfiguration } = walletOptions;
		if(chainConfiguration === 'testnet') return 'https://sei-chain-incentivized.com/sei-chain-app'
		if(chainConfiguration === 'devnet') return 'https://sei-chain-devnet.com/sei-chain-app'
		return chainConfiguration.restUrl;

	}, [walletOptions.chainConfiguration])

	const rpcUrl = useMemo(() => {
		const { chainConfiguration } = walletOptions;
		if(chainConfiguration === 'testnet') return 'https://sei-chain-incentivized.com/sei-chain-tm/'
		if(chainConfiguration === 'devnet') return 'https://sei-chain-devnet.com/sei-chain-tm/'
		return chainConfiguration.restUrl;

	}, [walletOptions.chainConfiguration])

	const [offlineSigner, setOfflineSigner] = useState<any | undefined>();
	const [accounts, setAccounts] = useState<WalletAccount[]>([]);
	const [connectedWallet, setConnectedWallet] = useState<WalletWindowKey | undefined>();

	const installedWallets = useMemo(
		() => (window ? SUPPORTED_WALLETS.filter((wallet) => window?.[wallet.windowKey]).map((wallet) => wallet.windowKey) : []),
		[window]
	);

	const connect = useCallback(async () => {
		try {
			const initConnection = async () => {
				const ConnectWallet = await connectWallet(inputWallet, chainId, restUrl, rpcUrl);
				if (!ConnectWallet) return;
				const { offlineSigner, accounts } = ConnectWallet;
				setOfflineSigner(offlineSigner);
				setAccounts(accounts);
				setConnectedWallet(inputWallet);
			};

			if (inputWallet) initConnection().then();
		} catch {}
	}, [inputWallet]);

	const disconnect = useCallback(() => {
		setConnectedWallet(undefined);
		setAccounts([]);
		setOfflineSigner(undefined);
	}, []);

	useEffect(() => {
		if (autoConnect && inputWallet) {
			connect().then(() => setConnectedWallet(inputWallet));
		}
	}, [autoConnect, inputWallet]);

	if (!inputWallet)
		return {
			connect,
			disconnect,
			error: 'No wallet defined.',
			supportedWallets: SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
			installedWallets,
			chainId
		};

	return {
		connect,
		disconnect,
		supportedWallets: SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
		installedWallets,
		offlineSigner,
		accounts,
		connectedWallet,
		chainId
	};
};

export default useWallet;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const supportedWallets_1 = require("./supportedWallets");
const config_1 = require("./config");
const useWallet = (inputWallet, autoConnect = false) => {
    const [offlineSigner, setOfflineSigner] = (0, react_1.useState)();
    const [accounts, setAccounts] = (0, react_1.useState)([]);
    const [connectedWallet, setConnectedWallet] = (0, react_1.useState)();
    const installedWallets = (0, react_1.useMemo)(() => supportedWallets_1.SUPPORTED_WALLETS.filter((wallet) => window[wallet.windowKey]).map((wallet) => wallet.windowKey), []);
    const connect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        switch (inputWallet) {
            case "keplr":
                yield window.keplr.experimentalSuggestChain(config_1.KEPLR_CHAIN_SUGGEST);
                break;
        }
        const getInfo = () => __awaiter(void 0, void 0, void 0, function* () {
            const offlineSigner = yield window[inputWallet].getOfflineSigner('atlantic-1');
            const accounts = yield offlineSigner.getAccounts();
            setOfflineSigner(offlineSigner);
            setAccounts(accounts);
        });
        getInfo().then();
    }), []);
    const disconnect = (0, react_1.useCallback)(() => {
        setConnectedWallet(undefined);
        setAccounts([]);
        setOfflineSigner(undefined);
    }, []);
    (0, react_1.useEffect)(() => {
        if (autoConnect) {
            connect().then(() => setConnectedWallet(inputWallet));
        }
    }, [autoConnect]);
    if (!inputWallet)
        return {
            connect,
            disconnect,
            error: "No wallet defined.",
            supportedWallets: supportedWallets_1.SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
            installedWallets,
        };
    return {
        connect,
        disconnect,
        supportedWallets: supportedWallets_1.SUPPORTED_WALLETS.map((wallet) => wallet.windowKey),
        installedWallets,
        offlineSigner,
        accounts,
        connectedWallet,
    };
};
exports.default = useWallet;

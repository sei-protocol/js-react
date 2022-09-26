declare global {
    interface Window {
        keplr: any;
        leap: any;
    }
}

export {default as useWallet} from './useWallet'

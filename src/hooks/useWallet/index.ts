declare global {
    interface Window {
        keplr: any;
        leap: any;
        falcon: any;
        cosmostation: any;
    }
}

export {default as useWallet} from './useWallet'

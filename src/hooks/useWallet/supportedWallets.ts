import { SupportedWallet } from "./types";

const KEPLR_WALLET: SupportedWallet = {
  windowKey: "keplr",
};

const LEAP_WALLET: SupportedWallet = {
  windowKey: "leap",
};

export const SUPPORTED_WALLETS: SupportedWallet[] = [
  KEPLR_WALLET,
  LEAP_WALLET,
];

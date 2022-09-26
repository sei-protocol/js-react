## Installation
```yarn add @sei-js/react```
or
```npm install @sei/react```

## Usage
```import { useWallet } from '@sei/react``` 

# Hooks
| Hook                    | Params                                       |
|-------------------------|----------------------------------------------|
| [useWallet](#usewallet) | (inputWallet: string, autoConnect?: boolean) |

## useWallet

| Property         | Type               | Description                                              |
|------------------|--------------------|----------------------------------------------------------|
| connectedWallet  | string?            | The currently connected wallet                           |
| connect          | () => Promise<any> | Async function to connect to input wallet                |
| disconnect       | () => void         | Function to disconnect from input wallet                 |
| supportedWallets | string[]           | List of supported wallets                                |
| installedWallets | string[]           | List of wallets installed                                |
| error            | string?            | Error message                                            |
| offlineSigner    | object?            | The offline signer associated with the connected  wallet |
| accounts         | object[]?          | The accounts associated with the connected wallet        |


# @sei-js/react
A set of React functions for [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) written in Typescript

## Installation
```yarn add @sei-js/react```
or
```npm install @sei/react```


# Hooks
| Hook                                  | Params                                                    |
|---------------------------------------|-----------------------------------------------------------|
| [useWallet](#usewallet)               | (window: any, inputWallet: string, autoConnect?: boolean) |
| [useQueryClient](#useQueryClient)     | (rpcAddress: string)                                      |
| [useSigningClient](#useSigningClient) | (rpcAddress: string, offlineSigner: any)                  |

## useWallet

```const { connectedWallet, offlineSigner } = useWallet(window, "leap", true)```

| Property         | Type                 | Description                                              |
|------------------|----------------------|----------------------------------------------------------|
| connectedWallet  | string?              | The currently connected wallet                           |
| connect          | () => Promise<any>   | Async function to connect to input wallet                |
| disconnect       | () => void           | Function to disconnect from input wallet                 |
| supportedWallets | string[]             | List of supported wallets                                |
| installedWallets | string[]             | List of wallets installed                                |
| error            | string?              | Error message                                            |
| chainId          | string               | Sei chain id                                             |
| offlineSigner    | object?              | The offline signer associated with the connected  wallet |
| accounts         | object[]?            | The accounts associated with the connected wallet        |

## useQueryClient

```const { queryClient, isLoading } = useQueryCleint("rpc_address")```

| Property    | Type                   | Description                                             |
|-------------|------------------------|---------------------------------------------------------|
| queryClient | StargateSigningClient? | A stargate signing client.                              |
| isLoading   | boolean                | Boolean value for when the initial loading is happening |

## useSigningClient

```const { signingClient, isLoading } = useSigningClient("rpc_address", offlineSigner)```

| Property         | Type                   | Description                                             |
|------------------|------------------------|---------------------------------------------------------|
| signingClient    | StargateSigningClient? | A stargate signing client.                              |
| isLoading        | boolean                | Boolean value for when the initial loading is happening |

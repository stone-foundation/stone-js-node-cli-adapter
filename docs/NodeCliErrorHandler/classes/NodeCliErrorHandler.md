[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [NodeCliErrorHandler](../README.md) / NodeCliErrorHandler

# Class: NodeCliErrorHandler

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:14](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/NodeCliErrorHandler.ts#L14)

Class representing an NodeCliErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../../declarations/type-aliases/NodeCliExecutionContext.md)\>

## Constructors

### new NodeCliErrorHandler()

> **new NodeCliErrorHandler**(`options`): [`NodeCliErrorHandler`](NodeCliErrorHandler.md)

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:22](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/NodeCliErrorHandler.ts#L22)

Create an NodeCliErrorHandler.

#### Parameters

##### options

[`NodeCliErrorHandlerOptions`](../interfaces/NodeCliErrorHandlerOptions.md)

NodeCliErrorHandler options.

#### Returns

[`NodeCliErrorHandler`](NodeCliErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`number`\>

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:37](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/NodeCliErrorHandler.ts#L37)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

The context of the adapter.

#### Returns

`Promise`\<`number`\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`

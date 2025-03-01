[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [NodeCliErrorHandler](../README.md) / NodeCliErrorHandler

# Class: NodeCliErrorHandler

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:22](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/NodeCliErrorHandler.ts#L22)

Class representing an NodeCliErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../../declarations/type-aliases/NodeCliExecutionContext.md)\>

## Constructors

### new NodeCliErrorHandler()

> **new NodeCliErrorHandler**(`options`): [`NodeCliErrorHandler`](NodeCliErrorHandler.md)

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:30](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/NodeCliErrorHandler.ts#L30)

Create an NodeCliErrorHandler.

#### Parameters

##### options

[`NodeCliErrorHandlerOptions`](../interfaces/NodeCliErrorHandlerOptions.md)

NodeCliErrorHandler options.

#### Returns

[`NodeCliErrorHandler`](NodeCliErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<`number`\>

Defined in: [node-cli-adapter/src/NodeCliErrorHandler.ts:41](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/NodeCliErrorHandler.ts#L41)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<`number`\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`

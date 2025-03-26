[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [node-cli-adapter/src/middleware/IncomingEventMiddleware.ts:11](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/middleware/IncomingEventMiddleware.ts#L11)

Middleware for handling incoming events in the Node CLI adapter.

This middleware processes the incoming event and prepares it for the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(): `IncomingEventMiddleware`

#### Returns

`IncomingEventMiddleware`

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeCliAdapterResponseBuilder`](../../../declarations/type-aliases/NodeCliAdapterResponseBuilder.md)\>

Defined in: [node-cli-adapter/src/middleware/IncomingEventMiddleware.ts:20](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/middleware/IncomingEventMiddleware.ts#L20)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../../declarations/interfaces/NodeCliAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeCliAdapterContext`](../../../declarations/interfaces/NodeCliAdapterContext.md), [`NodeCliAdapterResponseBuilder`](../../../declarations/type-aliases/NodeCliAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`NodeCliAdapterResponseBuilder`](../../../declarations/type-aliases/NodeCliAdapterResponseBuilder.md)\>

A promise that resolves to the processed context.

#### Throws

If required components are missing in the context.

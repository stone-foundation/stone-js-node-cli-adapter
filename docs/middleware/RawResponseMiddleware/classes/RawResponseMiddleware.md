[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/RawResponseMiddleware](../README.md) / RawResponseMiddleware

# Class: RawResponseMiddleware

Defined in: [node-cli-adapter/src/middleware/RawResponseMiddleware.ts:12](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/middleware/RawResponseMiddleware.ts#L12)

Middleware for handling raw responses in the Node CLI adapter.

This middleware processes outgoing responses and attaches the necessary exit code, and status codes to the raw response.

## Constructors

### new RawResponseMiddleware()

> **new RawResponseMiddleware**(): [`RawResponseMiddleware`](RawResponseMiddleware.md)

#### Returns

[`RawResponseMiddleware`](RawResponseMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeCliAdapterResponseBuilder`](../../../declarations/type-aliases/NodeCliAdapterResponseBuilder.md)\>

Defined in: [node-cli-adapter/src/middleware/RawResponseMiddleware.ts:21](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/middleware/RawResponseMiddleware.ts#L21)

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

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

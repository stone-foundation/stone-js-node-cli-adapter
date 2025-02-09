[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [errors/NodeCliAdapterError](../README.md) / NodeCliAdapterError

# Class: NodeCliAdapterError

Defined in: [node-cli-adapter/src/errors/NodeCliAdapterError.ts:6](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/errors/NodeCliAdapterError.ts#L6)

Custom error for Node CLI adapter operations.

## Extends

- `IntegrationError`

## Constructors

### new NodeCliAdapterError()

> **new NodeCliAdapterError**(`message`, `options`?): [`NodeCliAdapterError`](NodeCliAdapterError.md)

Defined in: [node-cli-adapter/src/errors/NodeCliAdapterError.ts:7](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/errors/NodeCliAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`NodeCliAdapterError`](NodeCliAdapterError.md)

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:2800

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:2799

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:2801

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:2822

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`IntegrationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:2808

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`IntegrationError.create`

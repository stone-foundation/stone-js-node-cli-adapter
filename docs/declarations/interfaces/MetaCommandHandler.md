[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [declarations](../README.md) / MetaCommandHandler

# Interface: MetaCommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:73](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L73)

Represents MetaCommandHandler.

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:77](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L77)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:78](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L78)

***

### module

> **module**: [`CommandHandlerType`](../type-aliases/CommandHandlerType.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:80](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L80)

***

### options

> **options**: [`CommandOptions`](../../decorators/Command/interfaces/CommandOptions.md)

Defined in: [node-cli-adapter/src/declarations.ts:79](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L79)

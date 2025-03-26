[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [declarations](../README.md) / ICommandHandler

# Interface: ICommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:46](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L46)

Represents the CommandHandler function for the Node Cli Adapter.

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Properties

### handle

> **handle**: `FunctionalEventHandler`\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:50](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L50)

***

### match()?

> `optional` **match**: (`event`) => `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:51](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/declarations.ts#L51)

#### Parameters

##### event

`IncomingEvent`

#### Returns

`boolean`

[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [declarations](../README.md) / ICommandHandler

# Interface: ICommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:46](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/declarations.ts#L46)

Represents the CommandHandler function for the Node Cli Adapter.

## Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

• **X** = `unknown`

## Properties

### handle

> **handle**: `FunctionalEventHandler`\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:50](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/declarations.ts#L50)

***

### match()?

> `optional` **match**: (`event`) => `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:51](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/declarations.ts#L51)

#### Parameters

##### event

`IncomingEvent`

#### Returns

`boolean`

[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [declarations](../README.md) / MetaCommandHandler

# Interface: MetaCommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:73](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/declarations.ts#L73)

Represents MetaCommandHandler.

## Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

• **X** = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:77](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/declarations.ts#L77)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:78](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/declarations.ts#L78)

***

### module

> **module**: [`CommandHandlerType`](../type-aliases/CommandHandlerType.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:80](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/declarations.ts#L80)

***

### options

> **options**: [`CommandOptions`](../../decorators/Command/interfaces/CommandOptions.md)

Defined in: [node-cli-adapter/src/declarations.ts:79](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/declarations.ts#L79)

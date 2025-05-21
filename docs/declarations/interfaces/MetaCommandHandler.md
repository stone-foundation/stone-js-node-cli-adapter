[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [declarations](../README.md) / MetaCommandHandler

# Interface: MetaCommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:81](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L81)

Represents MetaCommandHandler.

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:85](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L85)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:86](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L86)

***

### module

> **module**: [`CommandHandlerType`](../type-aliases/CommandHandlerType.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:88](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L88)

***

### options

> **options**: [`CommandOptions`](../../decorators/Command/interfaces/CommandOptions.md)

Defined in: [node-cli-adapter/src/declarations.ts:87](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L87)

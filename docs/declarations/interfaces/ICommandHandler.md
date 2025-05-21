[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [declarations](../README.md) / ICommandHandler

# Interface: ICommandHandler\<W, X\>

Defined in: [node-cli-adapter/src/declarations.ts:46](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L46)

Represents the CommandHandler function for the Node Cli Adapter.

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Properties

### handle

> **handle**: [`FunctionalCommandHandler`](../type-aliases/FunctionalCommandHandler.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:50](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L50)

***

### match()?

> `optional` **match**: (`event`) => `boolean`

Defined in: [node-cli-adapter/src/declarations.ts:51](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L51)

#### Parameters

##### event

`IncomingEvent`

#### Returns

`boolean`

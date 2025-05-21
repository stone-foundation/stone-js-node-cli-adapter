[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [declarations](../README.md) / FactoryCommandHandler

# Type Alias: FactoryCommandHandler()\<W, X\>

> **FactoryCommandHandler**\<`W`, `X`\> = (`container`) => [`ICommandHandler`](../interfaces/ICommandHandler.md)\<`W`, `X`\> \| [`FunctionalCommandHandler`](FunctionalCommandHandler.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/declarations.ts:57](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/declarations.ts#L57)

Represents FactoryCommandHandler.

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Parameters

### container

`IContainer` | `any`

## Returns

[`ICommandHandler`](../interfaces/ICommandHandler.md)\<`W`, `X`\> \| [`FunctionalCommandHandler`](FunctionalCommandHandler.md)\<`W`, `X`\>

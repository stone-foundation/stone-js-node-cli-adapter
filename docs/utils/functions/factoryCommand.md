[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [utils](../README.md) / factoryCommand

# Function: factoryCommand()

> **factoryCommand**\<`U`, `V`\>(`module`, `options`): [`MetaCommandHandler`](../../declarations/interfaces/MetaCommandHandler.md)\<`U`, `V`\>

Defined in: [node-cli-adapter/src/utils.ts:11](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/utils.ts#L11)

Factory function to create a CommandHandler.

## Type Parameters

• **U** *extends* `IncomingEvent` = `IncomingEvent`

• **V** = `unknown`

## Parameters

### module

[`FactoryCommandHandler`](../../declarations/type-aliases/FactoryCommandHandler.md)\<`U`, `V`\>

The CommandHandler module.

### options

[`CommandOptions`](../../decorators/Command/interfaces/CommandOptions.md)

## Returns

[`MetaCommandHandler`](../../declarations/interfaces/MetaCommandHandler.md)\<`U`, `V`\>

The CommandHandler.

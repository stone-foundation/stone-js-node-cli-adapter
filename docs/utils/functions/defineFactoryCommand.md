[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [utils](../README.md) / defineFactoryCommand

# Function: defineFactoryCommand()

> **defineFactoryCommand**\<`U`, `V`\>(`module`, `options`): [`MetaCommandHandler`](../../declarations/interfaces/MetaCommandHandler.md)\<`U`, `V`\>

Defined in: [node-cli-adapter/src/utils.ts:11](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/utils.ts#L11)

Factory function to create a CommandHandler.

## Type Parameters

### U

`U` *extends* `IncomingEvent` = `IncomingEvent`

### V

`V` = `unknown`

## Parameters

### module

[`FactoryCommandHandler`](../../declarations/type-aliases/FactoryCommandHandler.md)\<`U`, `V`\>

The CommandHandler module.

### options

[`CommandOptions`](../../decorators/Command/interfaces/CommandOptions.md)

## Returns

[`MetaCommandHandler`](../../declarations/interfaces/MetaCommandHandler.md)\<`U`, `V`\>

The CommandHandler.

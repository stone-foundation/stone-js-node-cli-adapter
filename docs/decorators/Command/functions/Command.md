[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/Command](../README.md) / Command

# Function: Command()

> **Command**\<`T`\>(`options`): `ClassDecorator`

Defined in: [node-cli-adapter/src/decorators/Command.ts:58](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/decorators/Command.ts#L58)

Command decorator to mark a class as a command and automatically bind it to the container.

This decorator is useful for marking classes that should be treated as commands by the Stone.js framework,
making them easily injectable and manageable by the command container.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

`Partial`\<[`CommandOptions`](../interfaces/CommandOptions.md)\> = `{}`

The configuration options for the command, including singleton and alias settings.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Command({ alias: 'MyCommand' })
class MyCommand {
  // Command class logic here.
}
```

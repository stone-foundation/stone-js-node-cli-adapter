[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [command/CommandServiceProvider](../README.md) / CommandServiceProvider

# Class: CommandServiceProvider

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:24](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandServiceProvider.ts#L24)

Class representing a CommandServiceProvider.
Responsible for registering router and application commands.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IServiceProvider`

## Constructors

### new CommandServiceProvider()

> **new CommandServiceProvider**(`container`): `CommandServiceProvider`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:40](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandServiceProvider.ts#L40)

Create a new instance of CommandServiceProvider.

#### Parameters

##### container

[`CommandServiceProviderOptions`](../interfaces/CommandServiceProviderOptions.md)

The container instance for dependency resolution.

#### Returns

`CommandServiceProvider`

## Methods

### mustSkip()

> **mustSkip**(): `boolean`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:51](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandServiceProvider.ts#L51)

Determines if this provider should be skipped.
Useful for registering the provider based on platform.

#### Returns

`boolean`

True if the provider should be skipped; otherwise, false.

#### Implementation of

`IServiceProvider.mustSkip`

***

### register()

> **register**(): `void`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:58](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandServiceProvider.ts#L58)

Registers router components and application commands in the service container.

#### Returns

`void`

#### Implementation of

`IServiceProvider.register`

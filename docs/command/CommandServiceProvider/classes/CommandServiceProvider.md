[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandServiceProvider](../README.md) / CommandServiceProvider

# Class: CommandServiceProvider

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:26](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/command/CommandServiceProvider.ts#L26)

Class representing a CommandServiceProvider.
Responsible for registering router and application commands.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IServiceProvider`

## Constructors

### new CommandServiceProvider()

> **new CommandServiceProvider**(`container`): [`CommandServiceProvider`](CommandServiceProvider.md)

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:42](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/command/CommandServiceProvider.ts#L42)

Create a new instance of CommandServiceProvider.

#### Parameters

##### container

[`CommandServiceProviderOptions`](../interfaces/CommandServiceProviderOptions.md)

The container instance for dependency resolution.

#### Returns

[`CommandServiceProvider`](CommandServiceProvider.md)

## Methods

### mustSkip()

> **mustSkip**(): `boolean`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:53](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/command/CommandServiceProvider.ts#L53)

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

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:60](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/command/CommandServiceProvider.ts#L60)

Registers router components and application commands in the service container.

#### Returns

`void`

#### Implementation of

`IServiceProvider.register`

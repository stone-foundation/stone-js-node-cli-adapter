[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandServiceProvider](../README.md) / CommandServiceProvider

# Class: CommandServiceProvider

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:27](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/command/CommandServiceProvider.ts#L27)

Class representing a CommandServiceProvider.
Responsible for registering router and application commands.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IServiceProvider`\<`IncomingEvent`, `OutgoingResponse`\>

## Constructors

### new CommandServiceProvider()

> **new CommandServiceProvider**(`container`): [`CommandServiceProvider`](CommandServiceProvider.md)

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:43](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/command/CommandServiceProvider.ts#L43)

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

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:57](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/command/CommandServiceProvider.ts#L57)

Determines if this provider should be skipped.
Useful for registering the provider based on platform.

#### Returns

`boolean`

True if the provider should be skipped; otherwise, false.

#### Implementation of

`IServiceProvider.mustSkip`

***

### onPrepare()

> **onPrepare**(): `void`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:64](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/command/CommandServiceProvider.ts#L64)

Prepares the provider for service registration.

#### Returns

`void`

#### Implementation of

`IServiceProvider.onPrepare`

***

### register()

> **register**(): `void`

Defined in: [node-cli-adapter/src/command/CommandServiceProvider.ts:74](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/command/CommandServiceProvider.ts#L74)

Registers router components and application commands in the service container.

#### Returns

`void`

#### Implementation of

`IServiceProvider.register`

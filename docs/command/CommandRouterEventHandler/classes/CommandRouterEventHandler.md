[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [command/CommandRouterEventHandler](../README.md) / CommandRouterEventHandler

# Class: CommandRouterEventHandler\<W, X\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:38](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L38)

Class representing a CommandRouterEventHandler.
Responsible for finding and dispatching commands based on incoming events.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

### X

`X` = `unknown`

## Implements

- `IEventHandler`\<`W`, `X`\>

## Constructors

### new CommandRouterEventHandler()

> **new CommandRouterEventHandler**\<`W`, `X`\>(`container`): `CommandRouterEventHandler`\<`W`, `X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:75](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L75)

Create a new instance of CommandRouter.

#### Parameters

##### container

[`CommandRouterEventHandlerOptions`](../interfaces/CommandRouterEventHandlerOptions.md)

The container instance for dependency resolution.

#### Returns

`CommandRouterEventHandler`\<`W`, `X`\>

## Methods

### dispatch()

> **dispatch**(`event`): `Promise`\<`X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:105](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L105)

Dispatches an event to the appropriate command.

#### Parameters

##### event

`W`

The incoming event to be dispatched.

#### Returns

`Promise`\<`X`\>

The result of the command execution.

***

### findCommand()

> **findCommand**(`event`): `undefined` \| [`ICommandHandler`](../../../declarations/interfaces/ICommandHandler.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:115](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L115)

Finds a command that matches the given event.

#### Parameters

##### event

`W`

The incoming event to match against commands.

#### Returns

`undefined` \| [`ICommandHandler`](../../../declarations/interfaces/ICommandHandler.md)\<`W`, `X`\>

The matching command, or undefined if no match is found.

***

### handle()

> **handle**(`event`): `Promise`\<`X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:95](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L95)

Handle an incoming event.

#### Parameters

##### event

`W`

The incoming event to process.

#### Returns

`Promise`\<`X`\>

The outgoing response.

#### Implementation of

`IEventHandler.handle`

***

### runCommand()

> **runCommand**(`event`, `command`?): `Promise`\<`X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:131](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L131)

Runs the given command with the provided event.

#### Parameters

##### event

`W`

The event to handle.

##### command?

[`ICommandHandler`](../../../declarations/interfaces/ICommandHandler.md)\<`W`, `X`\>

The command to execute.

#### Returns

`Promise`\<`X`\>

The result of the command execution, or void if no command is found.

***

### create()

> `static` **create**\<`W`, `X`\>(`options`): `CommandRouterEventHandler`\<`W`, `X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:63](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/command/CommandRouterEventHandler.ts#L63)

Creates a new instance of `CommandRouter`.

This static method initializes a `CommandRouter` with the specified options.

#### Type Parameters

##### W

`W` *extends* `IncomingEvent` = `IncomingEvent`

The type of the incoming event (default: `IncomingEvent`).

##### X

`X` *extends* `OutgoingResponse` = `OutgoingResponse`

The type of the outgoing response (default: `OutgoingResponse`).

#### Parameters

##### options

[`CommandRouterEventHandlerOptions`](../interfaces/CommandRouterEventHandlerOptions.md)

The configuration options for the `CommandRouter`.

#### Returns

`CommandRouterEventHandler`\<`W`, `X`\>

A new instance of `CommandRouter` configured with the provided options.

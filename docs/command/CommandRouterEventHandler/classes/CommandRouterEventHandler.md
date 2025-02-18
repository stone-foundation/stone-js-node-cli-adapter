[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandRouterEventHandler](../README.md) / CommandRouterEventHandler

# Class: CommandRouterEventHandler\<W, X\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:23](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L23)

Class representing a CommandRouterEventHandler.
Responsible for finding and dispatching commands based on incoming events.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

• **X** = `unknown`

## Implements

- `IEventHandler`\<`W`, `X`\>

## Constructors

### new CommandRouterEventHandler()

> **new CommandRouterEventHandler**\<`W`, `X`\>(`container`): [`CommandRouterEventHandler`](CommandRouterEventHandler.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:60](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L60)

Create a new instance of CommandRouter.

#### Parameters

##### container

[`CommandRouterEventHandlerOptions`](../interfaces/CommandRouterEventHandlerOptions.md)

The container instance for dependency resolution.

#### Returns

[`CommandRouterEventHandler`](CommandRouterEventHandler.md)\<`W`, `X`\>

## Methods

### dispatch()

> **dispatch**(`event`): `Promise`\<`X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:90](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L90)

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

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:100](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L100)

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

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:80](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L80)

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

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:116](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L116)

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

> `static` **create**\<`W`, `X`\>(`options`): [`CommandRouterEventHandler`](CommandRouterEventHandler.md)\<`W`, `X`\>

Defined in: [node-cli-adapter/src/command/CommandRouterEventHandler.ts:48](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/command/CommandRouterEventHandler.ts#L48)

Creates a new instance of `CommandRouter`.

This static method initializes a `CommandRouter` with the specified options.

#### Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

The type of the incoming event (default: `IncomingEvent`).

• **X** *extends* `OutgoingResponse` = `OutgoingResponse`

The type of the outgoing response (default: `OutgoingResponse`).

#### Parameters

##### options

[`CommandRouterEventHandlerOptions`](../interfaces/CommandRouterEventHandlerOptions.md)

The configuration options for the `CommandRouter`.

#### Returns

[`CommandRouterEventHandler`](CommandRouterEventHandler.md)\<`W`, `X`\>

A new instance of `CommandRouter` configured with the provided options.

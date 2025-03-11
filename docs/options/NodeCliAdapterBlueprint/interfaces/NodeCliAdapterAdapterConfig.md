[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterAdapterConfig

# Interface: NodeCliAdapterAdapterConfig

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:18](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/options/NodeCliAdapterBlueprint.ts#L18)

Configuration interface for the Node Cli Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the Node Cli platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:445

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### commands

> **commands**: [`MetaCommandHandler`](../../../declarations/interfaces/MetaCommandHandler.md)[]

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:19](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/options/NodeCliAdapterBlueprint.ts#L19)

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:451

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:456

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\>

Defined in: core/dist/index.d.ts:439

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:434

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<`any`, `any`, `any`\>, `any`\>[]

Defined in: core/dist/index.d.ts:430

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:421

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:425

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

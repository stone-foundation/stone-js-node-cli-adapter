[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [options/NodeConsoleAdapterBlueprint](../README.md) / NodeConsoleAdapterAdapterConfig

# Interface: NodeConsoleAdapterAdapterConfig

Defined in: node-cli-adapter/src/options/NodeConsoleAdapterBlueprint.ts:18

Configuration interface for the Node Cli Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the Node Cli platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:460

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### commands

> **commands**: [`MetaCommandHandler`](../../../declarations/interfaces/MetaCommandHandler.md)\<`IncomingEvent`, `unknown`\>[]

Defined in: node-cli-adapter/src/options/NodeConsoleAdapterBlueprint.ts:22

The commands that the Node Cli adapter will handle.

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:466

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:471

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<`any`, `any`, `any`\>\>

Defined in: core/dist/index.d.ts:454

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:449

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<`any`, `any`, `any`, `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>, `any`\>[]

Defined in: core/dist/index.d.ts:445

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:431

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:440

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

***

### variant

> **variant**: `"server"` \| `"browser"` \| `"console"`

Defined in: core/dist/index.d.ts:436

The class type of the adapter.
This is used to identify the category of the adapter.

#### Inherited from

`AdapterConfig.variant`

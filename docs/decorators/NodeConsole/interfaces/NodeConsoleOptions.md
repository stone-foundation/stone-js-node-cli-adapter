[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/NodeConsole](../README.md) / NodeConsoleOptions

# Interface: NodeConsoleOptions

Defined in: [node-cli-adapter/src/decorators/NodeConsole.ts:9](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/decorators/NodeConsole.ts#L9)

Configuration options for the `NodeConsole` decorator.
These options extend the default Node Cli adapter configuration.

## Extends

- `Partial`\<[`NodeCliAdapterAdapterConfig`](../../../options/NodeCliAdapterBlueprint/interfaces/NodeCliAdapterAdapterConfig.md)\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:430

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`Partial.alias`

***

### commands?

> `optional` **commands**: [`MetaCommandHandler`](../../../declarations/interfaces/MetaCommandHandler.md)[]

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:19](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/options/NodeCliAdapterBlueprint.ts#L19)

#### Inherited from

`Partial.commands`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:436

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`Partial.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:441

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`Partial.default`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\>

Defined in: core/dist/index.d.ts:419

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`Partial.errorHandlers`

***

### hooks?

> `optional` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:424

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

#### Inherited from

`Partial.hooks`

***

### incomingEvent?

> `optional` **incomingEvent**: *typeof* `IncomingEvent`

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:20](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/options/NodeCliAdapterBlueprint.ts#L20)

#### Inherited from

`Partial.incomingEvent`

***

### middleware?

> `optional` **middleware**: `MixedPipe`\<`any`, `any`\>[]

Defined in: core/dist/index.d.ts:414

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`Partial.middleware`

***

### platform?

> `optional` **platform**: `string`

Defined in: core/dist/index.d.ts:405

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`Partial.platform`

***

### resolver?

> `optional` **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:409

The class type resolver used to create instances of the adapter.

#### Inherited from

`Partial.resolver`

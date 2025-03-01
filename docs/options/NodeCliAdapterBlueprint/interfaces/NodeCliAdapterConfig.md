[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterConfig

# Interface: NodeCliAdapterConfig

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:25](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/options/NodeCliAdapterBlueprint.ts#L25)

Represents the NodeCli configuration options for the application.

## Extends

- `Partial`\<`AppConfig`\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<`AdapterConfig`\>

Defined in: core/dist/index.d.ts:506

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters

> **adapters**: [`NodeCliAdapterAdapterConfig`](NodeCliAdapterAdapterConfig.md)[]

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:26](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/options/NodeCliAdapterBlueprint.ts#L26)

Adapter configurations for the application.

#### Overrides

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: core/dist/index.d.ts:541

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### builder?

> `optional` **builder**: `BuilderConfig`\<`any`\>

Defined in: core/dist/index.d.ts:501

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: core/dist/index.d.ts:480

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: `Environment`

Defined in: core/dist/index.d.ts:475

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: core/dist/index.d.ts:492

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### kernel?

> `optional` **kernel**: `KernelConfig`

Defined in: core/dist/index.d.ts:514

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: `LifecycleHookType`\<`IBlueprint`\<`any`\>, `any`, `any`, `IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:546

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

#### Inherited from

`Partial.lifecycleHooks`

***

### listeners?

> `optional` **listeners**: `MetaEventListener`[]

Defined in: core/dist/index.d.ts:527

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: `MixedConfiguration`\<`any`\>[]

Defined in: core/dist/index.d.ts:552

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:488

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: `LoggerConfig`

Defined in: core/dist/index.d.ts:518

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: core/dist/index.d.ts:470

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: `MixedServiceProvider`[]

Defined in: core/dist/index.d.ts:536

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: core/dist/index.d.ts:497

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `MetaService`[]

Defined in: core/dist/index.d.ts:522

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: `MixedEventSubscriber`[]

Defined in: core/dist/index.d.ts:532

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: core/dist/index.d.ts:484

The default timezone for the application.

#### Inherited from

`Partial.timezone`

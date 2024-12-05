[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterBlueprint

# Interface: NodeCliAdapterBlueprint

Blueprint interface for the Node Cli Adapter.

This interface extends `StoneBlueprint` and defines the structure of the
Node Cli adapter blueprint used in the Stone.js framework. It includes
a `stone` object with an array of `NodeCliAdapterConfig` items.

## Extends

- `StoneBlueprint`

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `object`

Application-level settings, including environment, middleware, logging, and service registration.

#### adapters

> **adapters**: [`NodeCliAdapterConfig`](NodeCliAdapterConfig.md)[]

#### builder

> **builder**: `BuilderConfig`

#### providers

> **providers**: (...`args`) => `IProvider`[]

##### Parameters

###### args

...`any`[]

##### Returns

`IProvider`

#### Overrides

`StoneBlueprint.stone`

#### Defined in

[src/options/NodeCliAdapterBlueprint.ts:32](https://github.com/stonemjs/node-cli-adapter/blob/51fcc01bbd0eb589538cce80e62e720559e5481a/src/options/NodeCliAdapterBlueprint.ts#L32)

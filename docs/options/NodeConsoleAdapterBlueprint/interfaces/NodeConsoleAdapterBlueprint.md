[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [options/NodeConsoleAdapterBlueprint](../README.md) / NodeConsoleAdapterBlueprint

# Interface: NodeConsoleAdapterBlueprint

Defined in: node-cli-adapter/src/options/NodeConsoleAdapterBlueprint.ts:40

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

> **stone**: `Partial`\<[`NodeConsoleAdapterConfig`](NodeConsoleAdapterConfig.md)\>

Defined in: node-cli-adapter/src/options/NodeConsoleAdapterBlueprint.ts:41

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

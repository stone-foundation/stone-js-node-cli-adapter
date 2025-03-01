[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterBlueprint

# Interface: NodeCliAdapterBlueprint

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:36](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/options/NodeCliAdapterBlueprint.ts#L36)

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

> **stone**: [`NodeCliAdapterConfig`](NodeCliAdapterConfig.md)

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:37](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/options/NodeCliAdapterBlueprint.ts#L37)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

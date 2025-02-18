[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterBlueprint

# Interface: NodeCliAdapterBlueprint

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:37](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/options/NodeCliAdapterBlueprint.ts#L37)

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

Defined in: [node-cli-adapter/src/options/NodeCliAdapterBlueprint.ts:38](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/options/NodeCliAdapterBlueprint.ts#L38)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

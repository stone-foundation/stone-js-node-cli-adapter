# Interface: NodeConsoleOptions

Configuration options for the `NodeConsole` decorator.
These options extend the default Node Cli adapter configuration.

## Extends

- `Partial`\<[`NodeConsoleAdapterAdapterConfig`](../../../options/NodeConsoleAdapterBlueprint/interfaces/NodeConsoleAdapterAdapterConfig.md)\>

## Properties

### commands?

```ts
optional commands?: MetaCommandHandler<IncomingEvent, unknown>[];
```

The commands that the Node Cli adapter will handle.

#### Inherited from

[`NodeConsoleAdapterAdapterConfig`](../../../options/NodeConsoleAdapterBlueprint/interfaces/NodeConsoleAdapterAdapterConfig.md).[`commands`](../../../options/NodeConsoleAdapterBlueprint/interfaces/NodeConsoleAdapterAdapterConfig.md#commands)

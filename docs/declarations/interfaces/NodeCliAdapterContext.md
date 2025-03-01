[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeCliAdapterContext

# Interface: NodeCliAdapterContext

Defined in: [node-cli-adapter/src/declarations.ts:98](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/declarations.ts#L98)

Represents the context for the Node Cli Adapter.

This interface extends `AdapterContext` and includes additional properties
specific to generic Node Cli events.

## Extends

- `AdapterContext`\<[`NodeCliEvent`](NodeCliEvent.md), [`RawResponse`](../type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../type-aliases/NodeCliExecutionContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`CommandBuilder`](../type-aliases/CommandBuilder.md)

Defined in: core/dist/index.d.ts:1641

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEvent`

Defined in: core/dist/index.d.ts:1645

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingEventOptions`, `IncomingEvent`\>

Defined in: core/dist/index.d.ts:1653

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponse`

Defined in: core/dist/index.d.ts:1649

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: [`NodeCliEvent`](NodeCliEvent.md)

Defined in: core/dist/index.d.ts:1633

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: `number`

Defined in: [node-cli-adapter/src/declarations.ts:109](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/declarations.ts#L109)

The raw response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>

Defined in: core/dist/index.d.ts:1657

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`

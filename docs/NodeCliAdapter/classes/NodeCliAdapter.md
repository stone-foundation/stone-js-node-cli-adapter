[**Node CLI Adapter Documentation**](../../README.md)

***

[Node CLI Adapter Documentation](../../README.md) / [NodeCliAdapter](../README.md) / NodeCliAdapter

# Class: NodeCliAdapter

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:60](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/NodeCliAdapter.ts#L60)

Node Cli Adapter for Stone.js.

The `NodeCliAdapter` provides seamless integration between Stone.js applications
and the Node Cli environment. It processes incoming events from Node Cli,
transforms them into `IncomingEvent` instances, and returns a `RawResponse`.

This adapter ensures compatibility with Node Cli's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from Node Cli.

## Template

The type of the response to send back to Node Cli.

## Template

The Node Cli execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { NodeCliAdapter } from '@stone-js/node-cli-adapter';

const adapter = NodeCliAdapter.create({...});

const handler = await adapter.run();

export { handler };
```

## See

[Stone.js Documentation](https://stone-js.com/docs)

## Extends

- `Adapter`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../../declarations/type-aliases/NodeCliExecutionContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`, [`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)\>

## Constructors

### new NodeCliAdapter()

> `protected` **new NodeCliAdapter**(`blueprint`): `NodeCliAdapter`

Defined in: core/dist/index.d.ts:2751

Create an Adapter.

#### Parameters

##### blueprint

`IBlueprint`

The blueprint to create the adapter.

#### Returns

`NodeCliAdapter`

#### Inherited from

`Adapter< NodeCliEvent, RawResponse, NodeCliExecutionContext, IncomingEvent, IncomingEventOptions, OutgoingResponse, NodeCliAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`

Defined in: core/dist/index.d.ts:2742

#### Inherited from

`Adapter.blueprint`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHookType`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `number`\>

Defined in: core/dist/index.d.ts:2743

#### Inherited from

`Adapter.hooks`

***

### middleware

> `protected` `readonly` **middleware**: `AdapterMixedPipeType`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `number`\>[]

Defined in: core/dist/index.d.ts:2744

#### Inherited from

`Adapter.middleware`

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, `IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>\>

Defined in: core/dist/index.d.ts:2745

#### Inherited from

`Adapter.resolvedErrorHandlers`

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<`number`\>

Defined in: core/dist/index.d.ts:2805

Build the raw response.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

##### eventHandler?

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`number`\>

The raw response wrapper.

#### Inherited from

`Adapter.buildRawResponse`

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<`number`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:145](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/NodeCliAdapter.ts#L145)

Processes an incoming Node Cli event.

This method transforms the raw Node Cli event into a Stone.js `IncomingEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### rawEvent

[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md)

The raw Node Cli event to be processed.

##### executionContext

[`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)

The Node Cli execution context for the event.

#### Returns

`Promise`\<`number`\>

A promise resolving to the processed `RawResponse`.

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2833

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

`KernelHookName`

The hook to execute.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeEventHandlerHooks`

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2841

Execute adapter lifecycle hooks.

#### Parameters

##### name

`AdapterHookName`

The hook's name.

##### context?

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<`number`\>\>

Defined in: core/dist/index.d.ts:2797

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<`number`\>\>

The raw response.

#### Inherited from

`Adapter.handleError`

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

Defined in: core/dist/index.d.ts:2789

Handle the event.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.handleEvent`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `AdapterEventBuilderType`\<`number`\>\>

Defined in: core/dist/index.d.ts:2811

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `AdapterEventBuilderType`\<`number`\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:125](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/NodeCliAdapter.ts#L125)

Initializes the adapter and validates its execution context.

Ensures the adapter is running in an Node Cli environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an Node Cli context (e.g., browser).

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

Defined in: core/dist/index.d.ts:2826

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

The error handler.

#### Throws

IntegrationError

#### Inherited from

`Adapter.resolveErrorHandler`

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): `AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:2818

Get the event handler for the adapter.

#### Returns

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

#### Inherited from

`Adapter.resolveEventHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:103](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/NodeCliAdapter.ts#L103)

Executes the adapter and provides an Node Cli-compatible handler function.

The `run` method processes events, manages context, and returns the appropriate response.

#### Type Parameters

##### ExecutionResultType

`ExecutionResultType` = `number`

The type representing the Node Cli event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise resolving to the Node Cli handler function.

#### Throws

If used outside the Node Cli environment.

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<`number`\>

Defined in: core/dist/index.d.ts:2781

Send the raw event through the destination.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`number`\>

Platform-specific response.

#### Throws

IntegrationError

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: core/dist/index.d.ts:2849

Validate the context and event handler.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The context to validate.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError

#### Inherited from

`Adapter.validateContextAndEventHandler`

***

### create()

> `static` **create**(`blueprint`): `NodeCliAdapter`

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:81](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/NodeCliAdapter.ts#L81)

Creates an instance of the `NodeCliAdapter`.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint.

#### Returns

`NodeCliAdapter`

A new instance of `NodeCliAdapter`.

#### Example

```typescript
const adapter = NodeCliAdapter.create(blueprint);
await adapter.run();
```

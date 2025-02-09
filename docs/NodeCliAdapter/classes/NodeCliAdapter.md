[**Node CLI Adapter Documentation v0.0.21**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [NodeCliAdapter](../README.md) / NodeCliAdapter

# Class: NodeCliAdapter

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:61](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/NodeCliAdapter.ts#L61)

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

> `protected` **new NodeCliAdapter**(`options`): [`NodeCliAdapter`](NodeCliAdapter.md)

Defined in: core/dist/index.d.ts:2631

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<`IncomingEvent`, `OutgoingResponse`\>

Adapter options.

#### Returns

[`NodeCliAdapter`](NodeCliAdapter.md)

#### Inherited from

`Adapter< NodeCliEvent, RawResponse, NodeCliExecutionContext, IncomingEvent, IncomingEventOptions, OutgoingResponse, NodeCliAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2623

#### Inherited from

`Adapter.blueprint`

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:2624

#### Inherited from

`Adapter.handlerResolver`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:2622

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: core/dist/index.d.ts:2621

#### Inherited from

`Adapter.logger`

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2681

Hook that runs after handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.afterHandle`

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2674

Hook that runs before handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.beforeHandle`

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<`number`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:143](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/NodeCliAdapter.ts#L143)

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

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2695

Execute lifecycle hooks.

#### Parameters

##### hook

keyof `AdapterHooks`

The hook to execute.

##### context?

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

Defined in: core/dist/index.d.ts:2701

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:123](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/NodeCliAdapter.ts#L123)

Initializes the adapter and validates its execution context.

Ensures the adapter is running in an Node Cli environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an Node Cli context (e.g., browser).

#### Overrides

`Adapter.onInit`

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2668

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onPrepare`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2688

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

Action handler to be run.

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onTerminate`

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

Defined in: core/dist/index.d.ts:2716

Prepare the response for the event handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

The event handler to prepare the response for.

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`number`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.prepareResponse`

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

Defined in: core/dist/index.d.ts:2708

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), `number`, [`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)\>

The error handler.

#### Inherited from

`Adapter.resolveErrorHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:103](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/NodeCliAdapter.ts#L103)

Executes the adapter and provides an Node Cli-compatible handler function.

The `run` method processes events, manages context, and returns the appropriate response.

#### Type Parameters

• **ExecutionResultType** = `number`

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

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<`number`\>

Defined in: core/dist/index.d.ts:2658

Incoming message listener.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingEvent`, `OutgoingResponse`\>

##### context

[`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)

The event context.

#### Returns

`Promise`\<`number`\>

Platform-specific output.

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### create()

> `static` **create**(`options`): [`NodeCliAdapter`](NodeCliAdapter.md)

Defined in: [node-cli-adapter/src/NodeCliAdapter.ts:81](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/NodeCliAdapter.ts#L81)

Creates an instance of the `NodeCliAdapter`.

This factory method allows developers to instantiate the adapter with
the necessary configuration options, ensuring it is correctly set up for
Node Cli usage.

#### Parameters

##### options

`AdapterOptions`\<`IncomingEvent`, `OutgoingResponse`\>

The configuration options for the adapter, including
                 handler resolver, error handling, and other settings.

#### Returns

[`NodeCliAdapter`](NodeCliAdapter.md)

A fully initialized `NodeCliAdapter` instance.

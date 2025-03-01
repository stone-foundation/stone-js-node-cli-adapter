[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / CommandMiddleware

# Function: CommandMiddleware()

> **CommandMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:23](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/middleware/configMiddleware.ts#L23)

Middleware to process and register modules as command handlers.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next middleware in the pipeline to call.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

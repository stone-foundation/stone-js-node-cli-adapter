[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / CommandMiddleware

# Function: CommandMiddleware()

> **CommandMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: node-cli-adapter/src/middleware/BlueprintMiddleware.ts:23

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

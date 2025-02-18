[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / CommandMiddleware

# Function: CommandMiddleware()

> **CommandMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:14](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/middleware/configMiddleware.ts#L14)

Middleware to process and register modules as command handlers.

## Parameters

### context

`ConfigContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next middleware in the pipeline to call.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

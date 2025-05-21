[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / SetConsoleRouterEventHandlerMiddleware

# Function: SetConsoleRouterEventHandlerMiddleware()

> **SetConsoleRouterEventHandlerMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-cli-adapter/src/middleware/BlueprintMiddleware.ts:56](https://github.com/stonemjs/node-cli-adapter/blob/942602ba5f120245f6f1f4ea802cbd5e86b9d774/src/middleware/BlueprintMiddleware.ts#L56)

Blueprint middleware to set the ConsoleRouter as the main event handler for the application.

The SetConsoleRouterEventHandlerMiddleware takes precedence over all other event handlers middleware when in console mode.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextMiddleware`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next function in the pipeline.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint.

## Example

```typescript
SetConsoleRouterEventHandlerMiddleware({ modules, blueprint }, next);
```

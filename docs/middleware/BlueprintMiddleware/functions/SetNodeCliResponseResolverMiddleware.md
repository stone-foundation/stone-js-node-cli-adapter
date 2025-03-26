[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / SetNodeCliResponseResolverMiddleware

# Function: SetNodeCliResponseResolverMiddleware()

> **SetNodeCliResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: node-cli-adapter/src/middleware/BlueprintMiddleware.ts:51

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetNodeCliResponseResolverMiddleware(context, next)
```

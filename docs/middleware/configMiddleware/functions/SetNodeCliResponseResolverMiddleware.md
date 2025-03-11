[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetNodeCliResponseResolverMiddleware

# Function: SetNodeCliResponseResolverMiddleware()

> **SetNodeCliResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:51](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/middleware/configMiddleware.ts#L51)

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

[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetResponseResolverMiddleware

# Function: SetResponseResolverMiddleware()

> **SetResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:41](https://github.com/stonemjs/node-cli-adapter/blob/8aa5733b805725e9383f05513594f3738beb3cb2/src/middleware/configMiddleware.ts#L41)

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`ConfigContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetResponseResolverMiddleware(context, next)
```

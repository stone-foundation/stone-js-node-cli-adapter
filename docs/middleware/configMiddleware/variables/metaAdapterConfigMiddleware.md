[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddleware

# Variable: metaAdapterConfigMiddleware

> `const` **metaAdapterConfigMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:72](https://github.com/stonemjs/node-cli-adapter/blob/3323167ff73e7c9f811f72d8b7db77f6e1756f38/src/middleware/configMiddleware.ts#L72)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

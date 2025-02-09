[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddleware

# Variable: metaAdapterConfigMiddleware

> `const` **metaAdapterConfigMiddleware**: `MetaPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [node-cli-adapter/src/middleware/configMiddleware.ts:61](https://github.com/stonemjs/node-cli-adapter/blob/4ca37b2b0c5fee68c5c4db257f745b084b64de79/src/middleware/configMiddleware.ts#L61)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

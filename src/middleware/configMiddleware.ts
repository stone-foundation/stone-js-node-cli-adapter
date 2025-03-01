import {
  ClassType,
  isNotEmpty,
  IBlueprint,
  hasMetadata,
  getMetadata,
  OutgoingResponse,
  BlueprintContext,
  OutgoingResponseOptions
} from '@stone-js/core'
import { MetaCommandHandler } from '../declarations'
import { NODE_CONSOLE_PLATFORM } from '../constants'
import { COMMAND_KEY } from '../decorators/constants'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'

/**
 * Middleware to process and register modules as command handlers.
 *
 * @param context - The configuration context containing the modules and blueprint.
 * @param next - The next middleware in the pipeline to call.
 * @returns The updated blueprint or a promise resolving to it.
 */
export const CommandMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === NODE_CONSOLE_PLATFORM) {
    context.modules
      .filter(module => hasMetadata(module, COMMAND_KEY))
      .forEach(module => {
        const options = getMetadata<ClassType, MetaCommandHandler>(module, COMMAND_KEY)
        isNotEmpty(options) && context.blueprint.add('stone.adapter.commands', [{ ...options, module }])
      })
  }

  return await next(context)
}

/**
 * Middleware to dynamically set response resolver for adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetNodeCliResponseResolverMiddleware(context, next)
 * ```
 */
export const SetNodeCliResponseResolverMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === NODE_CONSOLE_PLATFORM) {
    context.blueprint.set('stone.kernel.skipMiddleware', true)
    context.blueprint.set(
      'stone.kernel.responseResolver',
      (options: OutgoingResponseOptions) => OutgoingResponse.create({ statusCode: 0, ...options })
    )
  }

  return await next(context)
}

/**
 * Configuration for adapter processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaAdapterConfigMiddleware: Array<MetaPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: CommandMiddleware, priority: 1 },
  { module: SetNodeCliResponseResolverMiddleware, priority: 6 }
]

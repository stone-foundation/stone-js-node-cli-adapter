import { IncomingEvent } from '@stone-js/core'
import { CommandOptions } from './decorators/Command'
import { FactoryCommandHandler, MetaCommandHandler } from './declarations'

/**
 * Factory function to create a CommandHandler.
 *
 * @param module - The CommandHandler module.
 * @returns The CommandHandler.
 */
export const defineFactoryCommand = <U extends IncomingEvent = IncomingEvent, V = unknown>(
  module: FactoryCommandHandler<U, V>,
  options: CommandOptions
): MetaCommandHandler<U, V> => {
  return { module, isFactory: true, options }
}

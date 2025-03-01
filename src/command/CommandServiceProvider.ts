import ora from 'ora'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { CommandInput } from './CommandInput'
import { CommandOutput } from './CommandOutput'
import { NODE_CONSOLE_PLATFORM } from '../constants'
import { Container } from '@stone-js/service-container'
import { IBlueprint, IServiceProvider } from '@stone-js/core'
import { CommandRouterEventHandler } from './CommandRouterEventHandler'

/**
 * CommandServiceProvider options.
 */
export interface CommandServiceProviderOptions {
  container: Container
  blueprint: IBlueprint
}

/**
 * Class representing a CommandServiceProvider.
 * Responsible for registering router and application commands.
 *
 * @author
 * Mr. Stone <evensstone@gmail.com>
 */
export class CommandServiceProvider implements IServiceProvider {
  /**
   * Blueprint configuration used to retrieve app settings.
   */
  private readonly blueprint: IBlueprint

  /**
   * The service container that manages dependencies.
   */
  private readonly container: Container

  /**
   * Create a new instance of CommandServiceProvider.
   *
   * @param container - The container instance for dependency resolution.
   */
  constructor ({ container, blueprint }: CommandServiceProviderOptions) {
    this.container = container
    this.blueprint = blueprint
  }

  /**
   * Determines if this provider should be skipped.
   * Useful for registering the provider based on platform.
   *
   * @returns True if the provider should be skipped; otherwise, false.
   */
  mustSkip (): boolean {
    return this.blueprint.get<string>('stone.adapter.platform') !== NODE_CONSOLE_PLATFORM
  }

  /**
   * Registers router components and application commands in the service container.
   */
  register (): void {
    this.setEventHandler()
    this.registerCommandUtils()
  }

  /**
   * Sets the event handler for the command service provider.
   */
  private setEventHandler (): void {
    this.blueprint.set(
      'stone.kernel.eventHandler',
      { module: CommandRouterEventHandler, isClass: true }
    )
  }

  /**
   * Registers command utilities in the service container.
   */
  private registerCommandUtils (): this {
    this.container.singleton(CommandInput, () => CommandInput.create({ prompt: inquirer.createPromptModule() })).alias(CommandInput, 'commandInput')
    this.container.singleton(CommandOutput, () => CommandOutput.create({ stdConsole: console, smartConsole: ora, format: chalk })).alias(CommandOutput, 'commandOutput')

    return this
  }
}

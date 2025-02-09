import { MetaCommandHandler } from '../declarations'
import { NODE_CONSOLE_PLATFORM } from '../constants'
import { nodeCliAdapterResolver } from '../resolvers'
import { NodeCliErrorHandler } from '../NodeCliErrorHandler'
import { CommandServiceProvider } from '../command/CommandServiceProvider'
import { metaAdapterConfigMiddleware } from '../middleware/configMiddleware'
import { MetaRawResponseMiddleware } from '../middleware/RawResponseMiddleware'
import { MetaIncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'
import { AdapterConfig, AppConfig, IncomingEvent, StoneBlueprint } from '@stone-js/core'

/**
 * Configuration interface for the Node Cli Adapter.
 *
 * Extends the `AdapterConfig` interface from the Stone.js framework and provides
 * customizable options specific to the Node Cli platform. This includes
 * alias, resolver, middleware, hooks, and various adapter state flags.
 */
export interface NodeCliAdapterAdapterConfig extends AdapterConfig {
  commands: MetaCommandHandler[]
  incomingEvent?: typeof IncomingEvent
}

/**
 * Represents the NodeCli configuration options for the application.
 */
export interface NodeCliAdapterConfig extends Partial<AppConfig> {
  adapters: NodeCliAdapterAdapterConfig[]
}

/**
 * Blueprint interface for the Node Cli Adapter.
 *
 * This interface extends `StoneBlueprint` and defines the structure of the
 * Node Cli adapter blueprint used in the Stone.js framework. It includes
 * a `stone` object with an array of `NodeCliAdapterConfig` items.
 */
export interface NodeCliAdapterBlueprint extends StoneBlueprint {
  stone: NodeCliAdapterConfig
}

/**
 * Default blueprint configuration for the Node Cli Adapter.
 *
 * This blueprint defines the initial configuration for the Node Cli adapter
 * within the Stone.js framework. It includes:
 * - An alias for the Node Cli platform (`Node_CLI_PLATFORM`).
 * - A default resolver function (currently a placeholder).
 * - Middleware, hooks, and state flags (`current`, `default`, `preferred`).
 */
export const nodeCliAdapterBlueprint: NodeCliAdapterBlueprint = {
  stone: {
    builder: {
      middleware: metaAdapterConfigMiddleware
    },
    providers: [
      CommandServiceProvider
    ],
    adapters: [
      {
        hooks: {},
        commands: [],
        current: false,
        default: false,
        platform: NODE_CONSOLE_PLATFORM,
        resolver: nodeCliAdapterResolver,
        middleware: [
          MetaIncomingEventMiddleware,
          MetaRawResponseMiddleware
        ],
        errorHandlers: {
          default: { module: NodeCliErrorHandler, isClass: true }
        }
      }
    ]
  }
}

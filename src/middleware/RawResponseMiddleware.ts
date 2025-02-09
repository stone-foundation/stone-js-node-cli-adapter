import { NextPipe } from '@stone-js/pipeline'
import { COMMAND_NOT_FOUND_CODE } from '../constants'
import { NodeCliAdapterError } from '../errors/NodeCliAdapterError'
import { NodeCliAdapterContext, NodeCliAdapterResponseBuilder } from '../declarations'
import { classMiddleware } from '@stone-js/core'

/**
 * Middleware for handling raw responses in the Node CLI adapter.
 *
 * This middleware processes outgoing responses and attaches the necessary exit code, and status codes to the raw response.
 */
export class RawResponseMiddleware {
  /**
   * Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise that resolves to the processed context.
   * @throws {NodeCliAdapterError} If required components are missing in the context.
   */
  async handle (context: NodeCliAdapterContext, next: NextPipe<NodeCliAdapterContext, NodeCliAdapterResponseBuilder>): Promise<NodeCliAdapterResponseBuilder> {
    const rawResponseBuilder = await next(context)

    if (context.outgoingResponse === undefined || rawResponseBuilder?.add === undefined) {
      throw new NodeCliAdapterError('The context is missing required components.')
    }

    rawResponseBuilder
      .add('exitCode', context.outgoingResponse.statusCode ?? COMMAND_NOT_FOUND_CODE)
      .add('statusCode', context.outgoingResponse.statusCode ?? COMMAND_NOT_FOUND_CODE)

    return rawResponseBuilder
  }
}

/**
 * Meta Middleware for processing outgoing responses.
 */
export const MetaRawResponseMiddleware = classMiddleware(RawResponseMiddleware)

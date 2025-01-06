import { NextPipe } from '@stone-js/pipeline'
import { NodeCliAdapterError } from '../../src/errors/NodeCliAdapterError'
import { IncomingEventMiddleware } from '../../src/middleware/IncomingEventMiddleware'
import { NodeCliAdapterContext, NodeCliAdapterResponseBuilder } from '../../src/declarations'

describe('IncomingEventMiddleware', () => {
  let middleware: IncomingEventMiddleware
  let mockContext: NodeCliAdapterContext
  let next: NextPipe<NodeCliAdapterContext, NodeCliAdapterResponseBuilder>

  beforeEach(() => {
    middleware = new IncomingEventMiddleware()

    mockContext = {
      rawEvent: {
        foo: 'bar',
        _extra: ['task']
      },
      rawResponse: {},
      executionContext: {},
      incomingEventBuilder: {
        add: vi.fn().mockReturnThis()
      }
    } as unknown as NodeCliAdapterContext

    next = vi.fn()
  })

  it('should throw error if context is missing rawEvent or incomingEventBuilder', async () => {
    // @ts-expect-error
    mockContext.rawEvent = null

    await expect(middleware.handle(mockContext, next)).rejects.toThrow(NodeCliAdapterError)

    // @ts-expect-error
    mockContext.rawEvent = { foo: 'bar' } as any
    // @ts-expect-error
    mockContext.incomingEventBuilder = null

    await expect(middleware.handle(mockContext, next)).rejects.toThrow(NodeCliAdapterError)
  })

  it('should call next with the modified context', async () => {
    await middleware.handle(mockContext, next)

    expect(next).toHaveBeenCalledWith(mockContext)
    expect(mockContext.incomingEventBuilder?.add).toHaveBeenCalledWith('source', {})
    expect(mockContext.incomingEventBuilder?.add).toHaveBeenCalledWith('metadata', { foo: 'bar', _extra: [], _task: 'task' })
  })
})

import { IncomingEvent } from '@stone-js/core'
import { defineCommand } from '../../src/blueprint/BlueprintUtils'

// Mocks
const mockOptions = {
  name: 'my:command',
  desc: 'A test command',
  args: ['<arg>']
}

describe('defineCommand', () => {
  it('should define a functional command (no isFactory)', () => {
    const handler = async (_event: IncomingEvent): Promise<void> => {}
    const result = defineCommand(handler, mockOptions)

    expect(result).toEqual({
      stone: {
        adapter: {
          commands: [
            {
              module: handler,
              options: mockOptions
            }
          ]
        }
      }
    })
  })

  it('should define a factory command (isFactory = true)', () => {
    const factoryHandler = (): any => ({
      handle: async (_event: IncomingEvent): Promise<void> => {}
    })

    const result = defineCommand(factoryHandler, {
      ...mockOptions,
      isFactory: true
    })

    expect(result).toEqual({
      stone: {
        adapter: {
          commands: [
            {
              module: factoryHandler,
              options: { ...mockOptions, isFactory: true },
              isFactory: true
            }
          ]
        }
      }
    })
  })

  it('should define a class command (isFactory = false)', () => {
    class MyCommand {
      async handle (_event: IncomingEvent): Promise<void> {}
    }

    const result = defineCommand(MyCommand, {
      ...mockOptions,
      isClass: true
    })

    expect(result).toEqual({
      stone: {
        adapter: {
          commands: [
            {
              module: MyCommand,
              options: { ...mockOptions, isClass: true },
              isClass: true
            }
          ]
        }
      }
    })
  })

  it('should define a command with undefined isFactory (default fallback)', () => {
    const handler = async (): Promise<void> => {}
    const result = defineCommand(handler, {
      name: 'noop',
      desc: 'Nothing'
    })

    expect(result.stone?.adapter?.commands?.[0]?.isClass).toBeUndefined()
    expect(result.stone?.adapter?.commands?.[0]?.isFactory).toBeUndefined()
  })
})

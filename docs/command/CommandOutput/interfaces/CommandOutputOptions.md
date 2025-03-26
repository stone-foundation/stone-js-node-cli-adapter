[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [command/CommandOutput](../README.md) / CommandOutputOptions

# Interface: CommandOutputOptions

Defined in: [node-cli-adapter/src/command/CommandOutput.ts:8](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandOutput.ts#L8)

CommandOutputOptions

## Properties

### format

> **format**: `ChalkInstance`

Defined in: [node-cli-adapter/src/command/CommandOutput.ts:10](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandOutput.ts#L10)

***

### smartConsole()

> **smartConsole**: (`options`?) => `Ora`

Defined in: [node-cli-adapter/src/command/CommandOutput.ts:11](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandOutput.ts#L11)

Elegant terminal spinner.

#### Parameters

##### options?

If a string is provided, it is treated as a shortcut for `options.text`.

`string` | `Options`

#### Returns

`Ora`

#### Example

```
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

***

### stdConsole

> **stdConsole**: `Console`

Defined in: [node-cli-adapter/src/command/CommandOutput.ts:9](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandOutput.ts#L9)

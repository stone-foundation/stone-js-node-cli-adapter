[**Node CLI Adapter Documentation**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../README.md) / [command/CommandInput](../README.md) / CommandInput

# Class: CommandInput

Defined in: [node-cli-adapter/src/command/CommandInput.ts:16](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L16)

Class representing a CommandInput Facade.
Provides a simplified and consistent API for prompting users in the terminal
using the `prompts` library. Supports a variety of question types,
such as text, number, confirm, password, select, multiselect, and more.

## Methods

### ask()

> **ask**(`message`, `fallback`?): `Promise`\<`string`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:62](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L62)

Asks the user for a string input.

#### Parameters

##### message

`string`

The question to display to the user.

##### fallback?

`string`

An optional default value.

#### Returns

`Promise`\<`string`\>

The user's response as a string.

***

### askNumber()

> **askNumber**(`message`, `fallback`?): `Promise`\<`number`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:77](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L77)

Asks the user for a numeric input.

#### Parameters

##### message

`string`

The question to display to the user.

##### fallback?

`number`

An optional default numeric value.

#### Returns

`Promise`\<`number`\>

The user's response as a number.

***

### choice()

> **choice**(`message`, `choices`, `fallbackIndex`, `multiple`): `Promise`\<`string` \| `string`[]\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:122](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L122)

Asks the user to choose from a list of options.

#### Parameters

##### message

`string`

The message to display to the user.

##### choices

`Choice`[]

A list of string options to choose from.

##### fallbackIndex

`number`[] = `...`

An array of fallback selected indices (default is first).

##### multiple

`boolean` = `false`

Whether to allow multiple selections (checkbox style).

#### Returns

`Promise`\<`string` \| `string`[]\>

The user's selection(s) as a string or array of strings.

***

### confirm()

> **confirm**(`message`, `fallback`): `Promise`\<`boolean`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:105](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L105)

Asks the user for a yes/no confirmation.

#### Parameters

##### message

`string`

The confirmation message to show.

##### fallback

`boolean` = `false`

The default value if the user provides no response (defaults to false).

#### Returns

`Promise`\<`boolean`\>

The user's response as a boolean.

***

### editor()

> **editor**(`message`, `fallback`?): `Promise`\<`string`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:144](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L144)

Opens a pseudo-editor by asking the user to input a multi-line value in the terminal.
(Note: actual editor support is limited in `prompts`, so this simulates one via text input).

#### Parameters

##### message

`string`

The message to display to the user.

##### fallback?

`string`

An optional default value.

#### Returns

`Promise`\<`string`\>

The user's response as a string.

***

### prompt()

> **prompt**\<`T`\>(`question`): `Promise`\<`T`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:47](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L47)

Prompts the user with a single question and returns the response.

#### Type Parameters

##### T

`T`

#### Parameters

##### question

`Omit`\<`PromptObject`\<`string`\>, `"name"`\>

A prompt object without a `name`, which will be set to 'value'.

#### Returns

`Promise`\<`T`\>

The user's input cast to the specified type.

***

### secret()

> **secret**(`message`): `Promise`\<`string`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:91](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L91)

Asks the user for a hidden (secret) input such as a password.

#### Parameters

##### message

`string`

The message to display to the user.

#### Returns

`Promise`\<`string`\>

The user's input as a string.

***

### create()

> `static` **create**(`options`): `CommandInput`

Defined in: [node-cli-adapter/src/command/CommandInput.ts:28](https://github.com/stonemjs/node-cli-adapter/blob/8ef828e16ecc094567e6273802f11f5e24d2745e/src/command/CommandInput.ts#L28)

Factory method to create a new CommandInput instance.

#### Parameters

##### options

[`CommandInputOptions`](../interfaces/CommandInputOptions.md)

The options to configure the CommandInput instance.

#### Returns

`CommandInput`

A new instance of CommandInput.

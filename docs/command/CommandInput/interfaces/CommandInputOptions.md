[**Node CLI Adapter Documentation v0.0.21**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandInput](../README.md) / CommandInputOptions

# Interface: CommandInputOptions

Defined in: [node-cli-adapter/src/command/CommandInput.ts:7](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/command/CommandInput.ts#L7)

CommandInputOptions

## Properties

### prompt()

> **prompt**: \<`A`, `PrefilledAnswers`\>(`questions`, `answers`?) => `PromptReturnType`\<`PrefilledAnswers` & `A` *extends* `T_1` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\>\<`A`, `PrefilledAnswers`\>(`questions`, `answers`?) => `PromptReturnType`\<`PrefilledAnswers` & `Answers`\<`Extract`\<keyof `A`, `string`\>\> *extends* `T_1` ? \{ \[K\_1 in string \| number \| symbol\]: \{\}\[K\_1\] \} : `never`\>\<`A`, `PrefilledAnswers`\>(`questions`, `answers`?) => `PromptReturnType`\<`PrefilledAnswers` & `A` *extends* `T_1` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\>\<`A`, `PrefilledAnswers`\>(`questions`, `answers`?) => `PromptReturnType`\<`PrefilledAnswers` & `A`\>

Defined in: [node-cli-adapter/src/command/CommandInput.ts:8](https://github.com/stonemjs/node-cli-adapter/blob/864b503e06a40512b872ced9446e09ca39f76729/src/command/CommandInput.ts#L8)

#### Type Parameters

• **A** *extends* `Answers`

• **PrefilledAnswers** *extends* `Answers` = `object`

#### Parameters

##### questions

`UnnamedDistinctQuestion`\<`PrefilledAnswers` & `A` *extends* `T` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\> & `object`[]

##### answers?

`PrefilledAnswers`

#### Returns

`PromptReturnType`\<`PrefilledAnswers` & `A` *extends* `T_1` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\>

#### Type Parameters

• **A** *extends* `Answers`

• **PrefilledAnswers** *extends* `Answers` = `object`

#### Parameters

##### questions

\{ \[name in string \| number \| symbol\]: UnnamedDistinctQuestion\<(PrefilledAnswers & A) extends T ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : never\> \}

##### answers?

`PrefilledAnswers`

#### Returns

`PromptReturnType`\<`PrefilledAnswers` & `Answers`\<`Extract`\<keyof `A`, `string`\>\> *extends* `T_1` ? \{ \[K\_1 in string \| number \| symbol\]: \{\}\[K\_1\] \} : `never`\>

#### Type Parameters

• **A** *extends* `Answers`

• **PrefilledAnswers** *extends* `Answers` = `object`

#### Parameters

##### questions

`Observable`\<`UnnamedDistinctQuestion`\<`PrefilledAnswers` & `A` *extends* `T` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\> & `object`\>

##### answers?

`PrefilledAnswers`

#### Returns

`PromptReturnType`\<`PrefilledAnswers` & `A` *extends* `T_1` ? \{ \[K in string \| number \| symbol\]: \{\}\[K\] \} : `never`\>

#### Type Parameters

• **A** *extends* `Answers`

• **PrefilledAnswers** *extends* `Answers` = `object`

#### Parameters

##### questions

`UnnamedDistinctQuestion`\<`A` & `PrefilledAnswers`\> & `object`

##### answers?

`PrefilledAnswers`

#### Returns

`PromptReturnType`\<`PrefilledAnswers` & `A`\>

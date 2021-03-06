# eslint-plugin-import-sort

Runs [import-sort](https://github.com/renke/import-sort) as an [ESLint](http://eslint.org) rule and reports differences as individual ESLint issues.

## Sample

```js
error: Insert `,` (prettier/prettier) at pkg/commons-atom/ActiveEditorRegistry.js:22:25:
  20 | import {
  21 |   observeActiveEditorsDebounced,
> 22 |   editorChangesDebounced
     |                         ^
  23 | } from './debounced';;
  24 |
  25 | import {observableFromSubscribeFunction} from '../commons-node/event';


error: Delete `;` (prettier/prettier) at pkg/commons-atom/ActiveEditorRegistry.js:23:21:
  21 |   observeActiveEditorsDebounced,
  22 |   editorChangesDebounced
> 23 | } from './debounced';;
     |                     ^
  24 |
  25 | import {observableFromSubscribeFunction} from '../commons-node/event';
  26 | import {cacheWhileSubscribed} from '../commons-node/observable';


2 errors found.
```

> `./node_modules/.bin/eslint --format codeframe pkg/commons-atom/ActiveEditorRegistry.js` (code from [nuclide](https://github.com/facebook/nuclide)).

## Installation

```sh
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

**_`eslint-plugin-prettier` does not install Prettier or ESLint for you._** _You must install these yourself._

Then, in your `.eslintrc.json`:

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Recommended Configuration

This plugin works best if you disable all other ESLint rules relating to code formatting, and only enable rules that detect patterns in the AST. (If another active ESLint rule disagrees with `prettier` about how code should be formatted, it will be impossible to avoid lint errors.) You can use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to disable all formatting-related ESLint rules.

If your desired formatting does not match the `prettier` output, you should use a different tool such as [prettier-eslint](https://github.com/prettier/prettier-eslint) instead.

To integrate this plugin with `eslint-config-prettier`, you can use the `"recommended"` configuration:

1. In addition to the above installation instructions, install `eslint-config-prettier`:

   ```sh
   npm install --save-dev eslint-config-prettier
   ```

2. Then you need to add `plugin:prettier/recommended` as the last extension in your `.eslintrc.json`:

   ```json
   {
     "extends": ["plugin:prettier/recommended"]
   }
   ```

This does three things:

- Enables `eslint-plugin-prettier`.
- Sets the `prettier/prettier` rule to `"error"`.
- Extends the `eslint-config-prettier` configuration.

You can then set Prettier's own options inside a `.prettierrc` file.

3. In order to support special ESLint plugins (e.g. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)), add extra exclusions for the plugins you use like so:

```json
{
  "extends": [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ]
}
```

For the list of every available exclusion rule set, please see the [readme of eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/master/README.md).

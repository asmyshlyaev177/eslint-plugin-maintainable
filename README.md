# eslint-plugin-maintainable

[![npm](https://img.shields.io/npm/v/eslint-plugin-maintainable.svg)](https://www.npmjs.com/package/eslint-plugin-maintainable)

This plugin focused on keeping the code clean, maintainable, and readable for humans. Because coders read existing code most of the times, cumbersome code will slow you down and lead to bugs.

This is achieved via rules like `complexity`, `sonarjs/cognitive-complexity`, `max-params`, `max-nested-callbacks` etc.
Also, line length is limited to 80 characters, so it's convinient to split and edit code side by side.

Also includes setup to format code with `prettier` via eslint, so no hassle to set up those two.

Feel free to ask questions or propose improvements to "issues"

:star: if you like the the project :)

## Installation and setup

### 1. Install via npm

Need eslint 8+ and prettier 3+

```sh
npm i -D eslint@8 eslint-plugin-maintainable@latest prettier@latest
```

### 2. Extend recommended config and add `maintainable` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix

```json

{
    "extends": [
      "plugin:maintainable/recommended",
      "plugin:maintainable/react",
      "...your others configs"
    ],
    "plugins": [
        "maintainable"
        "...your others plugins"
    ]
}
```

#### Typescript/JS

By default plugin intended to be used with Typescript, but can tune it for pure JS, just change parser to default "espree" or "@babel/eslint-parser".

```json
 "parser": "espree",
```

### 3. Add `.editorconfig`, IDEs and prettier will format code according to it

```text
root = true

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
quote_type = single
max_line_length = 80
```

### 4. Add browserslist to `package.json`

`eslint-plugin-compat` will tell you if you use api that not supported by browsers

```json
  "browserslist": [
    "last 5 Chrome versions",
    "last 5 ChromeAndroid versions",
    "last 5 Firefox versions",
    "last 5 FirefoxAndroid versions",
    "Firefox ESR",
    "last 3 Safari major versions",
    "last 2 iOS major versions"
  ],
```

### 5. Enforce it via `husky` and `lint-staged`

Install deps

```sh
npm i -D husky lint-staged
npx husky install
```

More details at [lint-staged repo](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

Edit(or create) file `pre-commit` in `.husky` directory with this content:
```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

And update `package.json`

```json
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
    ],
    "*.{html,css,less,ejs,json}": [
      "prettier --write",
    ]
  },

```

## Configurations

|     | Name          | Description                             |
| --- | ------------- | --------------------------------------- |
| ✅  | `base`        | Basic rules and prettier formatter      |
| ✅  | `recommended` | Basic + more rules for Node and Browser |
| ✅  | `react`       | Basic + React specific rules                    |

You can take a look at configs [definitions](https://github.com/asmyshlyaev177/eslint-plugin-maintainable/blob/main/lib/index.cjs)

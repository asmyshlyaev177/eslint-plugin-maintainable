# eslint-plugin-maintainable

This plugin focused on keeping code clean, maintanable and readable for humans. Because coders read existing code most of the times, cumbersome code will slow you down and lead to bugs.

This achieved via rules like `complexity`, `sonarjs/cognitive-complexity`, `max-params`, `max-nested-callbacks` etc.

Also includes setup to format code with `prettier` via eslint, so no hassle to set up those two.

## Installation and setup

### 1. Install via npm

```sh
npm i -D eslint eslint-plugin-maintainable prettier@3
```

### 2. Extend recommended config and add `maintainable` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix

```json

{
    "extends": [
      "plugin:maintainable/recommended",
      "...your others configs"
    ],
    "plugins": [
        "maintainable"
        "...your others plugins"
    ]
}
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

### 4. Add browserslist

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
```

More details at [lint-staged repo](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

And update `package.json`

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    "*.{html,css,less,ejs,json}": [
      "prettier --write",
      "git add"
    ]
  },

```

## Configurations

|     | Name          | Description                                       |
| --- | ------------- | ------------------------------------------------- |
| ✅  | `recommended` | General rules for Node and Browser, support js/ts |

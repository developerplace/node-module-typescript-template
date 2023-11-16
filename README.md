# node-module-typescript-template

[![TypeScript version][ts-badge]][typescript]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]

👩🏻‍💻 Developer Ready: This is a base template that will allow you to focus on developing your new module without worrying about CI/CD implementations, code review, semantic versioning, and other related tasks for [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [5.1][typescript]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- [EditorConfig][editorconfig] for consistent coding style
- Example configuration for [GitHub Actions][gh-actions]
- Simple example of TypeScript code and unit test

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Use as a repository template

To start, just click the **[Use template][repo-template-action]** link (or the green button). Start adding your code in the `src` and unit tests in the `test` directories.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/devalexanderdaza/node-module-typescript-template

cd node-module-typescript-template

npm install
```

## Additional Information

### ES Modules

This template uses native [ESM][esm]. Make sure to read [this][nodejs-esm], and [this][ts47-esm] first.

If your project requires CommonJS, you will have to [convert to ESM][sindresorhus-esm].

Please do not open issues for questions regarding CommonJS or ESM on this repo.

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/devalexanderdaza/node-module-typescript-template/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.1-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[gha-badge]: https://github.com/devalexanderdaza/node-module-typescript-template/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/devalexanderdaza/node-module-typescript-template/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-1]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/devalexanderdaza/node-module-typescript-template/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/devalexanderdaza
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/devalexanderdaza/node-module-typescript-template/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/devalexanderdaza/node-module-typescript-template/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#esm-nodejs
[editorconfig]: https://editorconfig.org

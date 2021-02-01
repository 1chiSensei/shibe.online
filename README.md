<div align="center">
        <br />
        <h1>shibe.online</h1>
        <br />
        <p>
                <a href="https://npmjs.com/package/shibe.online"><img src="https://img.shields.io/npm/v/shibe.online.svg" alt="Package" /></a>
                <a href="https://npmjs.com/package/shibe.online"><img src="https://img.shields.io/npm/dm/shibe.online.svg" alt="Downloads" /></a>
                <a href="https://travis-ci.com/1chiSensei/shibe.online"><img src="https://travis-ci.com/1chiSensei/shibe.online.svg?branch=main&status=passed" alt="Travis" /></a>
                <a href="https://david-dm.org"><img src="https://david-dm.org/1chiSensei/shibe.online.svg" alt="Dependencies" /></a>
                <a href="https://david-dm.org"><img src="https://david-dm.org/1chiSensei/shibe.online/dev-status.svg" alt="DevDeps" /></a>
                <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="DevDeps" /></a>
        </p>
        <p>
                <a href="https://nodei.co/npm/shibe.online/"><img src="https://nodei.co/npm/shibe.online.png?downloads=true&downloadRank=true&stars=true" alt="npm" /></a>
        </p>
</div>

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Example](#example)
- [Compatibility](#compatibility)
- [Usage](#usage)

## About

JavaScript API wrapper for https://shibe.online.

## Installation

Using [npm](https://npmjs.com):

```sh
npm i shibe.online
```

Using [yarn](https://yarnpkg.com):

```sh
yarn add shibe.online
```

Using [pnpm](https://pnpm.js.org):

```sh
pnpm add shibe.online
```

## Example

```js
const Shibe = require("shibe.online");

(async () => {
	const img = await Shibe.getShibe();
	console.log(img); // https://cdn.shibe.online/shibes/abc.jpg
})();

Shibe.getShibe(3).then((a) => {
	console.log(a); // ['https://cdn.shibe.online/shibes/def.jpg', 'https://cdn.shibe.online/shibes/ghi.jpg', 'https://cdn.shibe.online/shibes/jkl.jpg']
});
```

## Compatibility

| Node.js Version | Compatible? |
| :-------------: | :---------: |
|    v0.10.48     |     No      |
|    v0.12.18     |     No      |
|     v4.9.1      |     No      |
|     v5.12.0     |     No      |
|     v6.17.1     |     No      |
|     v7.10.1     |     No      |
|     v8.17.0     |     No      |
|     v9.11.2     |     No      |
|    v10.23.2     |     No      |
|    v11.15.0     |     No      |
|    v12.20.1     |     Yes     |
|    v13.14.0     |     Yes     |
|    v14.15.4     |     Yes     |
|     v15.7.0     |     Yes     |

## Usage

#### getShibe(_[count]_)

- Count is optional. (Default: 1)
- Returns `{Promise<string | string[]>}`

#### getCat(_[count]_)

- Count is optional. (Default: 1)
- Returns `{Promise<string | string[]>}`

#### getBird(_[count]_)

- Count is optional. (Default: 1)
- Returns `{Promise<string | string[]>}`

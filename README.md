# shibe.online
[![Travis](https://travis-ci.com/1chiSensei/shibe.online.svg?branch=main&status=passed)](https://travis-ci.com/1chiSensei/shibe.online)
[![Dependencies](https://david-dm.org/1chiSensei/shibe.online.svg)](https://david-dm.org)

JavaScript API wrapper for https://shibe.online.

# Example
```js
const Shibe = require('shibe.online');

(async () => {
	const img = await Shibe.getShibe();
	console.log(img); // https://cdn.shibe.online/shibes/abc.jpg
})();

Shibe.getShibe(3).then((a) => {
	console.log(a); // ['https://cdn.shibe.online/shibes/def.jpg', 'https://cdn.shibe.online/shibes/ghi.jpg', 'https://cdn.shibe.online/shibes/jkl.jpg']
});
```

# Compatibility
| Node.js Version | Compatible? |
|:---------------:|:-----------:|
|     v0.10.48    |      No     |
|     v0.12.18    |      No     |
|      v4.9.1     |      No     |
|     v5.12.0     |      No     |
|     v6.17.1     |      No     |
|     v7.10.1     |      No     |
|     v8.17.0     |     Yes     |
|     v9.11.2     |     Yes     |
|     v10.23.2    |     Yes     |
|     v11.15.0    |     Yes     |
|     v12.20.1    |     Yes     |
|     v13.14.0    |     Yes     |
|     v14.15.4    |     Yes     |
|     v15.7.0     |     Yes     |

# Usage
##### getShibe(*[count]*)
* Count is optional. (Default: 1)
* Returns `{Promise<string | string[]>}`

##### getCat(*[count]*)
* Count is optional. (Default: 1)
* Returns `{Promise<string | string[]>}`

##### getBird(*[count]*)
* Count is optional. (Default: 1)
* Returns `{Promise<string | string[]>}`

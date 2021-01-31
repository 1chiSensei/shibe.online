# shibe.online
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

# Usage
##### getShibe(*[count]*)
* Count is optional. (Default: 1)
* Returns {Promise<string | string[]>}

##### getCat(*[count]*)
* Count is optional. (Default: 1)
* Returns {Promise<string | string[]>}

##### getBird(*[count]*)
* Count is optional. (Default: 1)
* Returns {Promise<string | string[]>} 
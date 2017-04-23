# @jasonnutter/less-js-vars

Utility to parse Less variables into JavaScript variables.

## Installation

```sh
yarn add @jasonnutter/less-js-vars --save
npm install @jasonnutter/less-js-vars --save
```

## Usage

Assumes that your code has extracted the raw text of the `less` file, e.g. using [raw-loader](https://github.com/webpack-contrib/raw-loader) or [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback).

Variable names will be in [camelCase](https://lodash.com/docs/4.17.4#camelCase).

`colors.less`:
```less
@white: #fff;
@black-color: #000;
```

`raw-loader`:
```js
import lessJsVars from '@jasonnutter/less-js-vars';
import colors from '!!raw-loader!./colors.less';

const parsedColors = lessJsVars(colors);

console.log(parsedColors.white);
console.log(parsedColors.blackColor);
```

`fs.readFile`:
```js
import lessJsVars from '@jasonnutter/less-js-vars';
import fs from 'fs';

fs.readFile('./colors.less', 'utf8', (err, colors) => {
    const parsedColors = lessJsVars(colors);

    console.log(parsedColors.white);
    console.log(parsedColors.blackColor);
});
```

## Prior Art

Inspired by [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js).


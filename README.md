# javascript-chrome-extension-development-environment

my Chrome extension development environment

## Setup

export template to target directory:

```sh
$ npm run export -- /path/to/dir
```

install dependencies:

```sh
$ cd /path/to/dir
$ npm install
```

## npm-scripts

### develop

develop extension:

```sh
$ npm run develop
```

execute webpack with `--watch` option.

### chrome

execute Google Chrome with new profile:

```sh
$ npm run chrome
```

profile data is save to `env` directory.

### build

generate crx file:

```sh
$ npm run build
```

### release

generate release file for Chrome Web Store:

```sh
$ npm run release
```

### lint

lint with eslint:

```sh
$ npm run lint
```

### clean

remove generated files:

```sh
$ npm run clean
```

if you want more info, see `package.json`.

## See also

- [List of Chromium Command Line Switches](http://peter.sh/experiments/chromium-command-line-switches/)
- [--load-extension parameter for chrome doesn't work](http://stackoverflow.com/questions/25064523/load-extension-parameter-for-chrome-doesnt-work)

## License

```
(The MIT LICENSE)

Copyright (c) 2017 sasa+1 <sasaplus1@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
```

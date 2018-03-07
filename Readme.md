## What we need as pre-requisites?

1. Node Package Manager npm to manage all the required javascript packages.

2. `nodejs` to implement our development server. npm will get install when you install nodejs.
> [Download Node.js](https://nodejs.org/en/ "Download Node.js")

### Once you have Node
Yes, thats what we all need along with working internet connection to get your project start and go with following steps. 

#### npm init
Create your project folder and init the npm to create `package.json` file. This file will have the details of your project that you enter while init and further dependency packages that you will install.
```javascript
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (react-basic-setup)
version: (1.0.0)
description: A basic react project setup to start with. If you are looking for one, clone it and use it.
entry point: (index.js)
test command:
git repository:
keywords:
author: maaraa
license: (ISC) MIT
About to write to /Users/gk/GK/GURU/Studies/ReactJS/react-basic-setup/package.json:

{
  "name": "react-basic-setup",
  "version": "1.0.0",
  "description": "A basic react project setup to start with. If you are looking for one, clone it and use it.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "maaraa",
  "license": "MIT"
}


Is this ok? (yes) yes
```

---

## Production Dependencies
#### `react` core library
You need to have react package that you install using npm and you need it as a production dependency for this project to work after deployment as well during development.
```javascript
$ npm install --save react
npm WARN react-basic-setup@1.0.0 No repository field.

+ react@16.2.0
added 17 packages in 2.741s
```

#### `react-dom` library
You need `react-dom` as a production dependency which takes care of co-ordination with DOM elements and virtual DOM.
```javascript
$ npm install --save react-dom
npm WARN react-basic-setup@1.0.0 No repository field.

+ react-dom@16.2.0
added 1 package in 0.897s
```

---

## Developement Dependencies
#### `webpack`
Webpack for bundling your code. We will bundle all the files into single file using this. Also, you will load the different loaders for code compilation and transpilation (eg. babel)
```javascript
$ npm install --save-dev webpack
npm WARN react-basic-setup@1.0.0 No repository field.

+ webpack@4.1.0
updated 1 package in 8.459s
```
#### `webpack-dev-server`
Webpack have this package to use it as your development web server.
```javascript
$ npm install --save-dev webpack-dev-server
npm WARN react-basic-setup@1.0.0 No repository field.

+ webpack-dev-server@3.1.0
added 262 packages in 10.203s
```

#### `babel-core`
This is to transpile your ES6 code to ES5 since most of the browsers supports ES5 mostly. 
```javascript
$ npm install --save-dev babel-core
npm WARN react-basic-setup@1.0.0 No repository field.

+ babel-core@6.26.0
added 32 packages in 5.235s
```
#### `babel-loader` 
This loader will be configured in webpack and webpack will use this.
```javascript
$ npm install --save-dev babel-loader
npm WARN react-basic-setup@1.0.0 No repository field.

+ babel-loader@7.1.4
updated 1 package in 4.452s
```
#### Babel Presets 
This to tell babel which logics that transpiler needs. We need below presets

Preset|Description
---|---
`babel-preset-es2015`|this is to tell babel to use es6 to es5 logic
`babel-preset-react`|this is to tell babel that this code is based on react library which it needs to transpile
`babel-preset-stage-2`| this is for having some extra features. [More information on stages](https://tc39.github.io/process-document/)

```javascript
$ npm install --save-dev babel-preset-es2015 babel-preset-react babel-preset-stage-2
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
npm WARN react-basic-setup@1.0.0 No repository field.

+ babel-preset-stage-2@6.24.1
+ babel-preset-react@6.24.1
+ babel-preset-es2015@6.24.1
added 71 packages in 7.143s
```
---

# pkgDep

> Get package dependencies

## Install

```
$ npm i pkg-dep
```

## Example

### import 1

```js
const pkgDep = require('pkg-dep')
```

### import 2

```js
const {PkgDep} = require('pkg-dep')
const pkgDep = new PkgDep()
```

### Methods

```js
console.log(pkgDep.getSync())
pkgDep.get().then(res => console.log(res))
pkgDep.has('dot-prop').then(res => console.log(res))
console.log(pkgDep.hasSync('dot-prop'))
```

## API

### new pkgDep() or pkgDep()

Returns a `new` instance.

### pkgDep.get()

Returns a `Promise` of dependencies object.

### pkgDep.getSync()

Returns dependencies object.

### pkgDep.has()

Returns a result(`Promise`) of typeof `boolean` whether a dependency exists or not.

### pkgDep.hasSync()

Returns a result typeof `boolean` whether a dependency exists or not.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/pkg-dep/blob/master/license.md)

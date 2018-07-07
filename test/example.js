const pkgDep = require('../')

// const {PkgDep} = require('.')
// const pkgDep = new PkgDep()

// console.log(pkgDep.getSync())
// pkgDep.get().then(res => console.log(res))
// pkgDep.has('dot-prop').then(res => console.log(res))
// console.log(pkgDep.hasSync('dot-prop'))

pkgDep.config({
  cwd: __dirname
})
console.log(pkgDep.hasSync('dot-prop'))
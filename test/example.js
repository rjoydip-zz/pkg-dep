const pkgDep = require('../')

pkgDep.config({
  cwd: __dirname
})

pkgDep.hasSync('dot-prop')
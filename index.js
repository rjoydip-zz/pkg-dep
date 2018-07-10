'use strict'

const path = require('path')
const chalk = require('chalk')
const readPkg = require('read-pkg')
const dotProp = require('dot-prop')
const fileExists = require('file-exists')

class PkgDep {
  constructor (opt) {
    this._options = opt || { cwd: process.cwd() }
    this._readPkg = this.$readPkg()
  }

  $readPkg() {
    return fileExists.sync(path.join(this._options.cwd, 'package.json')) ? readPkg.sync({ cwd: this._options.cwd }) : (console.log(chalk.red('No package.json found')), {})
  }

  config(option) {
    this._options = typeof option === 'object' ? option : {}
    this._readPkg = this.$readPkg()
    return this
  }

  _isString (value) {
    return typeof value === 'string'
  }

  _isExistsDependencies () {
    return dotProp.has(this._readPkg, 'dependencies')
  }

  _isExistsDevDependencies () {
    return dotProp.has(this._readPkg, 'devDependencies')
  }

  _getDependencyObj () {
    return this._readPkg.dependencies
  }

  _getDevDependencyObj () {
    return this._readPkg.devDependencies
  }

  _get () {
    return this._isExistsDependencies() && this._isExistsDevDependencies()
      ? { dependencies: this._getDependencyObj(), devDependencies: this._getDevDependencyObj() }
      : this._isExistsDependencies()
        ? this._getDependencyObj()
        : this._isExistsDevDependencies()
          ? this._getDevDependencyObj()
          : 'No dependencies are there'
  }

  _has (name) {
    const _dependency = this._getDependencyObj()
    const _devDependency = this._getDevDependencyObj()
    return this._isExistsDependencies() && this._isExistsDevDependencies() ? _dependency[name] || _devDependency[name] : this._isExistsDependencies() ? _dependency[name]: this._isExistsDevDependencies() ? _devDependency[name]: false
  }

  get () {
    return new Promise((resolve, reject) => {
      if (this._get()) return resolve(this._get())
      else return reject(new Error('No dependencies are there'))
    })
  }

  getSync () {
    return this._get()
  }

  has (name) {
    return new Promise((resolve, reject) => {
      if (this._isString(name)) {
        return resolve(!!this._has(name))
      } else {
        reject(new Error(`${name} not valid type`))
      }
    })
  }

  hasSync (name) {
    if (this._isString(name)) {
      return !!this._has(name)
    } else {
      return false
    }
  }
}

module.exports = Object.assign(new PkgDep(), { PkgDep })

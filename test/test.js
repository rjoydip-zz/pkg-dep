const pkgDep = require('../')

test('getSync', () => {
  expect(typeof pkgDep.getSync()).toBe('object')
})

test('get', () => {
  pkgDep.get().then(res => expect(typeof res).toBe('object'))
})

test('has true case', () => {
  pkgDep.has('dot-prop').then(res => expect(res).toEqual(true))
})

test('has false case', () => {
  pkgDep.has('dot-prop-1').then(res => expect(res).toEqual(false))
})

test('hasSync true case', () => {
  expect(pkgDep.hasSync('dot-prop')).toEqual(true)
})

test('hasSync false case', () => {
  expect(pkgDep.hasSync('dot-prop-1')).toEqual(false)
})

test('hasSync except string', () => {
  expect(pkgDep.hasSync([])).toEqual(false)
})

test('has except string', () => {
  pkgDep.has([]).catch(err => expect(() => {
    throw err
  }).toThrow())
})

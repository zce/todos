/* eslint-env jest */
import storage from './storage'

it('storage set object', () => {
  const key = 'test_storage_set_key'
  const value = { foo: 'bar' }
  storage.set(key, value)
  const json = window.localStorage.getItem(key)
  expect(json).toBe(JSON.stringify(value))
})

it('storage get null', () => {
  const key = 'test_storage_get_null_key'
  const value = storage.get(key)
  expect(value).toBeNull()
})

it('storage get primitive', () => {
  const key = 'test_storage_get_primitive_key'
  window.localStorage.setItem(key, '"foobar"')
  const value = storage.get(key)
  expect(value).toBe('foobar')
})

it('storage get object', () => {
  const key = 'test_storage_get_object_key'
  window.localStorage.setItem(key, JSON.stringify({ foo: 'bar' }))
  const value = storage.get(key)
  expect(value.foo).toBe('bar')
})

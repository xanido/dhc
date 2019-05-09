import { flatMapDeep, map, pipe, filter, mapKeys, mapValues } from 'lodash/fp'

export const getFieldsets = (schema) =>
  schema.filter(item => item.type === 'fieldset')

export const getAllFields = (schema) => {
  const kids = node =>
    node.fields
      ? [map(kids)(node.fields)]
      : { ...node }

  return pipe(
    flatMapDeep(kids),
    filter(item => item.type !== 'fieldset')
  )(schema)
}

export const filterFields = (schema, filters) => {
  return pipe(
    filter(filters)
  )(getAllFields(schema))
}

export const getDefaultValues = (schema, fallbackValue = '') => {
  // the default fp versions of mapValues/mapKey's iterees only
  // receive the `key` - the follow reconfig enables us to receive
  // the `value` by restoring the original iteree signature
  const mapValuesWithKey = mapValues.convert({ 'cap': false })
  const mapKeysWithValue = mapKeys.convert({ 'cap': false })

  return pipe(
    mapKeysWithValue(val => val.name),
    mapValuesWithKey(val => val.default || fallbackValue)
  )(getAllFields(schema))
}

import { flatMapDeep, map, pipe, filter } from 'lodash/fp'

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

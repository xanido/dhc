import { getFieldsets, getAllFields, filterFields } from './utils'

test('getFieldsets returns top-level fieldset schemas', () => {
  const schema = [{
    name: 'personalDetails',
    type: 'fieldset'
  },
  {
    name: 'address',
    type: 'fieldset'
  },
  {
    name: 'avatar',
    type: 'file'
  }]
  const schemaAfter = [{
    name: 'personalDetails',
    type: 'fieldset'
  },
  {
    name: 'address',
    type: 'fieldset'
  }]

  expect(
    getFieldsets(schema)
  ).toEqual(schemaAfter)
})

test('getAllFields recursively flattens', () => {
  const schema = [{
    name: 'personalDetails',
    type: 'fieldset',
    fields: [
      {
        name: 'address',
        type: 'field'
      },
      {
        name: 'address2',
        type: 'fieldset'
      },
      {
        name: 'suburb',
        type: 'field'
      },
      {
        name: 'personalDetails',
        type: 'fieldset',
        fields: [
          {
            name: 'address3',
            type: 'field'
          }
        ]
      }
    ]
  },
  {
    name: 'phone',
    type: 'field'
  }]
  const schemaAfter = [
    {
      name: 'address',
      type: 'field'
    },
    {
      name: 'suburb',
      type: 'field'
    },
    {
      name: 'address3',
      type: 'field'
    },
    {
      name: 'phone',
      type: 'field'
    }
  ]

  expect(
    getAllFields(schema)
  ).toEqual(schemaAfter)
})

test('filterFields filters & flattens', () => {
  const schema = [{
    name: 'personalDetails',
    type: 'fieldset',
    fields: [
      {
        name: 'address',
        type: 'field'
      },
      {
        name: 'address2',
        type: 'field'
      },
      {
        name: 'suburb',
        type: 'field',
        hidden: true
      },
      {
        name: 'personalDetails',
        type: 'fieldset',
        fields: [
          {
            name: 'address3',
            type: 'field'
          }
        ]
      }
    ]
  },
  {
    name: 'phone',
    type: 'field',
    hidden: false
  }]
  const schemaAfter = [
    {
      name: 'address',
      type: 'field'
    },
    {
      name: 'address2',
      type: 'field'
    },
    {
      name: 'address3',
      type: 'field'
    },
    {
      name: 'phone',
      type: 'field',
      hidden: false
    }
  ]

  expect(
    filterFields(schema, field => !field.hidden)
  ).toEqual(schemaAfter)
})

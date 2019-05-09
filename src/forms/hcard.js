const hcardSchema = [
  {
    name: 'personalDetails',
    label: 'Personal Details',
    type: 'fieldset',
    fields: [
      {
        name: 'givenName',
        label: 'Given Name',
        type: 'text'
      },
      {
        name: 'surname',
        label: 'Surname',
        type: 'text'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email'
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel'
      }
    ]
  },
  {
    name: 'address',
    label: 'Address',
    type: 'fieldset',
    fields: [
      {
        name: 'addressHouseNumber',
        label: 'House Name or #',
        type: 'text'
      },
      {
        name: 'addressStreet',
        label: 'Street',
        type: 'text'
      },
      {
        name: 'addressSuburb',
        label: 'Suburb',
        type: 'text'
      },
      {
        name: 'addressState',
        label: 'State',
        type: 'text'
      },
      {
        name: 'addressPostcode',
        label: 'Postcode',
        type: 'number'
      },
      {
        name: 'addressCountry',
        label: 'Country',
        type: 'text'
      }
    ]
  },
  {
    name: 'avatar',
    label: 'Upload Avatar',
    type: 'file',
    autoRender: false
  }
]

export default hcardSchema

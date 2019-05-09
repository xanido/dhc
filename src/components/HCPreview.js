import React from 'react'

const createFieldValueGetter = (values) =>
  (fieldName) => values[fieldName]

const HCPreview = ({ fields, values }) => {
  const getValue = createFieldValueGetter(values)
  return (
    <div className='vcard'>
      <div className='fn' title='Full name'>{getValue('givenName')} {getValue('surname')}</div>
      {getValue('avatar') &&
        <img src={getValue('avatar')} alt='Avatar preview' />
      }
      <div className='email'>{getValue('email')}</div>
      <div className='tel'>{getValue('phone')}</div>
      <div className='adr'>
        <div>
          <span className='street-address'>
            {getValue('addressHouseNumber')}
            {' '}
            {getValue('addressStreet')}
          </span>
        </div>
        <div>
          <span className='locality'>{getValue('addressSuburb')}</span>
          {getValue('addressState') ? ', ' : ''}
          <span className='region'>{getValue('addressState')}</span>
        </div>
        <div>
          <span className='postal-code'>{getValue('addressPostcode')}</span>
          {' '}
          <span className='country-name'>{getValue('addressCountry')}</span>
        </div>
      </div>
    </div>
  )
}

export default HCPreview

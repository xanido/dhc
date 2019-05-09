import React from 'react'
import { HCPreviewWrapper, PreviewHeader, PreviewCard, PreviewLine as StyledPreviewLine, PreviewLineLabel, PreviewLineValue } from './HCPreview.styles'
import { Columns, Column } from './HCLayout.styles'

const createFieldValueGetter = (values) =>
  (fieldName) => values[fieldName]

const PreviewLine = (props) =>
  <StyledPreviewLine>
    { props.children
      ? props.children
      : <>
        <PreviewLineLabel>{props.label}</PreviewLineLabel>
        <PreviewLineValue>{props.value}</PreviewLineValue>
      </>
    }
  </StyledPreviewLine>

const HCPreview = ({ fields, values }) => {
  const getValue = createFieldValueGetter(values)
  return (
    <HCPreviewWrapper className='vcard'>
      <PreviewHeader>
        &#8203;
        <span className='fn' title='Full name'>{getValue('givenName')} {getValue('surname')}</span>
        {getValue('avatar') &&
          <img src={getValue('avatar')} alt='Avatar preview' />
        }
      </PreviewHeader>
      <PreviewCard>
        <PreviewLine className='email' label='Email' value={getValue('email')} />
        <PreviewLine className='tel' label='Phone' value={getValue('phone')} />
        <div className='adr'>
          <PreviewLine className='street-address' label='Address'
            value={[getValue('addressHouseNumber'), getValue('addressStreet')].join(' ')}
          />
          <PreviewLine>
            <PreviewLineLabel />
            <PreviewLineValue>
              <span className='locality'>{getValue('addressSuburb')}</span>
              {getValue('addressState') ? ', ' : ''}
              <span className='region'>{getValue('addressState')}</span>
            </PreviewLineValue>
          </PreviewLine>
          <Columns columns={2} gutter={0}>
            <Column>
              <PreviewLine className='postal-code' label='Postcode' value={getValue('addressPostcode')} />
            </Column>
            <Column>
              <PreviewLine className='country-name' label='Country' value={getValue('addressCountry')} />
            </Column>
          </Columns>
        </div>
      </PreviewCard>
    </HCPreviewWrapper>
  )
}

export default HCPreview

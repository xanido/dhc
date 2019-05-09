import React from 'react'
import HCField from './HCField'
import { Fieldset, Legend } from './HCFieldset.styles'
import { Columns, Column } from './HCLayout'

const HCFieldset = ({
  legend,
  fields,
  values,
  onInputChange
}) => {
  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      <Columns columns={2}>
        {fields.map(field => (
          <Column key={field.name}>
            <HCField
              field={field}
              value={values[field.name]}
              onInputChange={onInputChange}
            />
          </Column>
        ))}
      </Columns>
    </Fieldset>
  )
}

export default HCFieldset

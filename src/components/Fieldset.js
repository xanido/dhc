import React from 'react'
import Field from './Field'
import { Fieldset as StyledFieldset, Legend } from './Fieldset.styles'
import { Columns, Column } from './Layout'

const Fieldset = ({
  legend,
  fields,
  values,
  onInputChange
}) => {
  return (
    <StyledFieldset>
      <Legend>{legend}</Legend>
      <Columns columns={2}>
        {fields.map(field => (
          <Column key={field.name}>
            <Field
              field={field}
              value={values[field.name]}
              onInputChange={onInputChange}
            />
          </Column>
        ))}
      </Columns>
    </StyledFieldset>
  )
}

export default Fieldset

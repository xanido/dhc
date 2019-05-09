import React from 'react'
import HCField from './HCField'
import { Fieldset, Legend } from './HCFieldset.styles'
import { Row, Column } from './HCLayout'

const HCFieldset = ({
  legend,
  fields,
  values,
  onInputChange
}) => {
  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      <Row columns={2}>
        {fields.map(field => (
          <Column key={field.name}>
            <HCField
              field={field}
              value={values[field.name]}
              onInputChange={onInputChange}
            />
          </Column>
        ))}
      </Row>
    </Fieldset>
  )
}

export default HCFieldset

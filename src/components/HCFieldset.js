import React from 'react'
import HCField from './HCField'

const HCFieldset = ({
  legend,
  fields,
  values,
  onInputChange
}) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(field => (
        <HCField
          field={field}
          value={values[field.name]}
          onInputChange={onInputChange}
        />
      ))}
    </fieldset>
  )
}

export default HCFieldset

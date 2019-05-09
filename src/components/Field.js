import React from 'react'
import { FieldWrapper, Label, Input } from './Field.styles'

const Field = ({ className, field, value, onInputChange, valueExtractor, labelAfter }) => {
  const label = (
    <Label
      htmlFor={field.name}
      key='label'
    >
      {field.label}
    </Label>
  )

  const input = (
    <Input
      type={field.type}
      name={field.name}
      id={field.name}
      value={value}
      onChange={(event) => onInputChange(field, valueExtractor(event))}
      key='value'
    />
  )

  const parts = [label, input]
  // file input styling relies on the label being after the input
  if (labelAfter) parts.reverse()

  return (
    <FieldWrapper className={className}>
      {parts}
    </FieldWrapper>
  )
}

Field.defaultProps = {
  valueExtractor: (event) => event.target.value
}

export default Field

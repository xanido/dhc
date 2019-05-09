import React from 'react'

const HCField = ({ field, value, onInputChange }) => {
  let input

  return (
    <React.Fragment>
      <label htmlFor={field.name}>{field.label}</label>
      <input
        ref={(node) => {
          input = node
        }}
        type={field.type}
        name={field.name}
        id={field.name}
        value={value}
        onChange={() => onInputChange(field, input.value)}
      />
    </React.Fragment>
  )
}

export default HCField

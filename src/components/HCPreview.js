import React from 'react'

const HCPreview = ({ fields, values }) => (
  <div>
    {fields.map(field => (
      <div>
        <h5>{field.label}</h5>
        <p>{values[field.name]}</p>
      </div>
    ))}
    <div>
      <img src={values['avatar']} />
    </div>
  </div>
)

export default HCPreview

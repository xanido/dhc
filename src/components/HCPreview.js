import React from 'react'

const HCPreview = ({ fields, values }) => (
  <div>
    {fields.map(field => (
      <div key={field.name}>
        <h5>{field.label}</h5>
        <p data-testid={`preview-${field.name}`}>{values[field.name]}</p>
      </div>
    ))}
    <div>
      <img src={values['avatar']} data-testid='preview-avatar' />
    </div>
  </div>
)

export default HCPreview

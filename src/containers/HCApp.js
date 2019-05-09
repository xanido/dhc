import { hot } from 'react-hot-loader/root'
import React from 'react'
import HCFieldset from '../components/HCFieldset'
import HCPreview from '../components/HCPreview'
import schema from '../forms/hcard'
import { getFieldsets, filterFields, getAllFields } from '../forms/utils'
import { mapKeys, mapValues } from 'lodash'

class HCApp extends React.Component {
  constructor (props) {
    super(props)

    const fieldsKeyedByName = mapKeys(getAllFields(schema), (val, key) => val.name)
    const fieldsDefaultVals = mapValues(fieldsKeyedByName, (val, key) => '')

    this.state = {
      fields: fieldsDefaultVals
    }
  }

  onInputChange = (field, value) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [field.name]: value
      }
    })
  }

  onFileChange = (field, input) => {
    const reader = new FileReader()
    const file = input.files[0]

    reader.onloadend = () => {
      this.onInputChange(field, reader.result)
    }
    reader.readAsDataURL(file)
  }

  render () {
    const avatarField = filterFields(schema, { name: 'avatar' })[0]
    const previewableFields = filterFields(schema, field =>
      !field.hasOwnProperty('autoRender') || field.autoRender !== false
    )

    return (
      <div>
        {getFieldsets(schema).map(fieldset =>
          <HCFieldset
            legend={fieldset.label}
            fields={fieldset.fields}
            values={this.state.fields}
            onInputChange={this.onInputChange}
            key={fieldset.label}
          />
        )}

        <label htmlFor={avatarField.name}>Upload Avatar</label>
        <input
          type='file'
          name={avatarField.name}
          id={avatarField.name}
          onChange={event => this.onFileChange(avatarField, event.target)}
        />

        <HCPreview
          fields={previewableFields}
          values={this.state.fields}
        />
      </div>
    )
  }
}

export default hot(HCApp)

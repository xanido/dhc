import React from 'react'
import { Field } from './FileSelectButton.styles'

const FileSelectButton = (props) => {
  const valueExtractor = (event) => event.target.files
  const onInputChange = (field, value) => {
    const reader = new FileReader()
    const file = value[0]

    reader.onloadend = () => {
      props.onInputChange(field, reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Field
      {...props}
      {...{ valueExtractor, onInputChange }}
      labelAfter
    />
  )
}

export default FileSelectButton

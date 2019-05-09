import React from 'react'
import { HCField } from './HCFileSelectButton.styles'

const HCFileSelectButton = (props) => {
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
    <HCField
      {...props}
      {...{ valueExtractor, onInputChange }}
      labelAfter
    />
  )
}

export default HCFileSelectButton

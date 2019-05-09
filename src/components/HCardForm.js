import React from 'react'
import { Columns, Column } from './Layout'
import { Button } from './Button.styles'
import FileSelectButton from './FileSelectButton'
import Fieldset from './Fieldset'
import { getFieldsets, filterFields } from '../forms/utils'

const HCardForm = ({ schema, values, onInputChange }) => {
  const avatarField = filterFields(schema, { name: 'avatar' })[0]

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {getFieldsets(schema).map(fieldset =>
        <Fieldset
          legend={fieldset.label}
          fields={fieldset.fields}
          values={values}
          onInputChange={onInputChange}
          key={fieldset.label}
        />
      )}
      <Columns columns={2}>
        <Column>
          <FileSelectButton
            key={avatarField.name}
            field={avatarField}
            onInputChange={onInputChange}
          />
        </Column>
        <Column>
          <Button width='100%'>Create hCard</Button>
        </Column>
      </Columns>
    </form>
  )
}

export default HCardForm

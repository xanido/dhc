import { hot } from 'react-hot-loader/root'
import React from 'react'
import FileSelectButton from '../components/FileSelectButton'
import Fieldset from '../components/Fieldset'
import Preview from '../components/Preview'
import schema from '../forms/hcard'
import { getFieldsets, filterFields, getAllFields } from '../forms/utils'
import { mapKeys, mapValues } from 'lodash'
import { Global } from '@emotion/core'
import { AppTitle, AppContainer, GlobalStyles, Pane, FormPane, PreviewPane, PaneContent } from './App.styles'
import { Button } from '../components/Button.styles'
import { Columns, Column } from '../components/Layout'

class App extends React.Component {
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

  render () {
    const avatarField = filterFields(schema, { name: 'avatar' })[0]
    const previewableFields = filterFields(schema, field =>
      !field.hasOwnProperty('autoRender') || field.autoRender !== false
    )

    return (
      <AppContainer>
        <Global styles={GlobalStyles} />
        <Column>
          <Pane css={FormPane}>
            <PaneContent>
              <AppTitle>hCard Builder</AppTitle>
              {getFieldsets(schema).map(fieldset =>
                <Fieldset
                  legend={fieldset.label}
                  fields={fieldset.fields}
                  values={this.state.fields}
                  onInputChange={this.onInputChange}
                  key={fieldset.label}
                />
              )}
              <Columns columns={2}>
                <Column>
                  <FileSelectButton
                    key={avatarField.name}
                    field={avatarField}
                    onInputChange={this.onInputChange}
                  />
                </Column>
                <Column>
                  <Button width='100%'>Create hCard</Button>
                </Column>
              </Columns>
            </PaneContent>
          </Pane>
        </Column>

        <Column>
          <Pane css={PreviewPane}>
            <PaneContent>
              <Preview
                fields={previewableFields}
                values={this.state.fields}
              />
            </PaneContent>
          </Pane>
        </Column>
      </AppContainer>
    )
  }
}

export default hot(App)

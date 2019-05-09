import { hot } from 'react-hot-loader/root'
import React from 'react'
import Preview from '../components/Preview'
import schema from '../forms/hcard'
import { getDefaultValues } from '../forms/utils'
import { Global } from '@emotion/core'
import { AppTitle, AppContainer, GlobalStyles, Pane, FormPane, PreviewPane, PaneContent } from './App.styles'
import Form from '../components/HCardForm'
import { Column } from '../components/Layout'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: getDefaultValues(schema)
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
    return (
      <AppContainer>
        <Global styles={GlobalStyles} />
        <Column>
          <Pane css={FormPane}>
            <PaneContent>
              <AppTitle>hCard Builder</AppTitle>
              <Form
                schema={schema}
                values={this.state.fields}
                onInputChange={this.onInputChange}
              />
            </PaneContent>
          </Pane>
        </Column>

        <Column>
          <Pane css={PreviewPane}>
            <PaneContent>
              <Preview
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

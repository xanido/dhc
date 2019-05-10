import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './containers/App'

const rootElement = document.getElementById('app')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

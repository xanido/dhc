import React from 'react'
import { render, fireEvent, cleanup, wait } from 'react-testing-library'
import App from '../containers/App'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('Preview to be blank on initial render', () => {
  const { queryByTitle } = render(
    <App />
  )

  expect(queryByTitle(/Full name/i).textContent.trim()).toBeFalsy()
})

test('Preview is updated as fields are changed', () => {
  const expectedGivenName = 'John'
  const expectedSurname = 'Appleseed'
  const { getByLabelText, queryByTitle } = render(
    <App />
  )

  fireEvent.change(getByLabelText(/Given Name/i), { target: {
    value: expectedGivenName
  } })

  fireEvent.change(getByLabelText(/Surname/i), { target: {
    value: expectedSurname
  } })

  expect(queryByTitle(/Full name/i).textContent).toEqual(expectedGivenName + ' ' + expectedSurname)
})

test('Preview avatar preview is updated when file selected', async () => {
  const { getByLabelText, getByAltText } = render(
    <App />
  )

  const file = new File(['(ツ)'], 'john.png', { type: 'image/jpg' })
  const imageInput = getByLabelText('Upload Avatar')
  fireEvent.change(imageInput, { target: { files: [file] } })

  await wait(() => {
    const avatarPreview = getByAltText(/Avatar preview/i)
    expect(avatarPreview.src).toEqual(
      'data:image/jpg;base64,KOODhCk='
    )
  })
})

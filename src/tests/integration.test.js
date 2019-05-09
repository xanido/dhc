import React from 'react'
import { render, fireEvent, cleanup, wait } from 'react-testing-library'
import HCApp from '../containers/HCApp'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('HCPreview to be blank on initial render', () => {
  const { queryByTestId } = render(
    <HCApp />
  )

  expect(queryByTestId(/preview-givenName/i).textContent).toBeFalsy()
})

test('HCPreview is updated as fields are changed', () => {
  const testVal = 'John'
  const { queryByLabelText, getByLabelText, queryByTestId } = render(
    <HCApp />
  )

  expect(queryByLabelText(/Given Name/i)).toBeTruthy()

  fireEvent.change(getByLabelText(/Given Name/i), { target: {
    value: testVal
  } })

  expect(queryByTestId(/preview-givenName/i).textContent).toEqual(testVal)
})

test('HCPreview avatar preview is updated when file selected', async () => {
  const { getByLabelText, getByTestId } = render(
    <HCApp />
  )

  const file = new File(['(ツ)'], 'john.png', { type: 'image/jpg' })
  const imageInput = getByLabelText('Upload Avatar')
  fireEvent.change(imageInput, { target: { files: [file] } })

  await wait(() => {
    const avatarPreview = getByTestId('preview-avatar')
    expect(avatarPreview.src).toEqual(
      'data:image/jpg;base64,KOODhCk='
    )
  })
})

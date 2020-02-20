/* eslint-env jest */

import { render } from '@testing-library/react'
import React from 'react'
import App from '../pages/index'

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<App />)

    expect(getByText('Battery included Next.js')).not.toBeNull()
  })
})

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot()
  })
})

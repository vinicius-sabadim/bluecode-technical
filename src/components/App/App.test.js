import React from 'react'
import { render, fireEvent, getByTestId } from 'react-testing-library'

import App from './App'

describe('App', () => {
  describe('barcode input', () => {
    test('should init as an empty string', () => {
      const { container } = render(<App />)
      const barcode = getByTestId(container, 'barcode')
      expect(barcode.value).toBe('')
    })

    describe('input validation', () => {
      test('should allow a number to be typed', () => {
        const { container } = render(<App />)
        const barcode = getByTestId(container, 'barcode')
        fireEvent.change(barcode, { target: { value: '1' } })
        expect(barcode.value).toBe('1')
      })
      test('should not allow a letter to be typed', () => {
        const { container } = render(<App />)
        const barcode = getByTestId(container, 'barcode')
        fireEvent.change(barcode, { target: { value: 'a' } })
        expect(barcode.value).toBe('')
      })

      test('should allow only 19 digits', () => {
        const { container } = render(<App />)
        const barcode = getByTestId(container, 'barcode')
        fireEvent.change(barcode, { target: { value: '1234567890123456789' } })
        fireEvent.change(barcode, { target: { value: '12345678901234567890' } })
        expect(barcode.value).toBe('1234567890123456789')
      })
    })
  })
})

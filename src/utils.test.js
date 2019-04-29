import React from 'react'
import ReactDOM from 'react-dom'
import * as utils from './utils'

describe('utils', () => {
  describe('calculate checksum', () => {
    test('should return 0 when the remainder is 0', () => {
      const result = utils.calculateChecksum('0')
      expect(result).toBe(0)
    })

    test('should return a number different than 0 when the remainder is greater than 0', () => {
      const result = utils.calculateChecksum('5489850354')
      expect(result).toBe(7)
    })

  })
})

import { calculateChecksum } from './utils'

describe('utils', () => {
  describe('calculate checksum', () => {
    test('should return 0 when the remainder is 0', () => {
      const result = calculateChecksum('0')
      expect(result).toBe(0)
    })

    test('should return a digit different than 0 when the remainder is greater than 0', () => {
      const result = calculateChecksum('5489850354')
      expect(result).toBe(7)
    })
  })
})

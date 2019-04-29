import { calculateChecksum } from './utils'

describe('utils', () => {
  describe('calculate checksum', () => {
    test('should return 0 when the remainder is 0', () => {
      const result = calculateChecksum('0')
      expect(result).toBe(0)
    })

    describe('remainder greater than 0', () => {
      test('should return 7', () => {
        const result = calculateChecksum('5489850354')
        expect(result).toBe(7)
      })
      test('should return 3', () => {
        const result = calculateChecksum('8533218192162301367')
        expect(result).toBe(3)
      })
    })
  })
})

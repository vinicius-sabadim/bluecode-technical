import { calculateChecksum, calculateHeight, calculateWidth } from './utils'

describe('utils', () => {
  describe('calculateChecksum', () => {
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

  describe('calculateHeight', () => {
    test('should return the size for digit 0', () => {
      const result = calculateHeight('0')
      expect(result).toBe('50px')
    })
    test('should return the size for digit 1', () => {
      const result = calculateHeight('1')
      expect(result).toBe('100px')
    })
    test('should return the size for digit 2', () => {
      const result = calculateHeight('2')
      expect(result).toBe('150px')
    })
    test('should return the size for digit 3', () => {
      const result = calculateHeight('3')
      expect(result).toBe('200px')
    })
  })

  describe('calculateWidth', () => {
    test('should return the size for digit 0', () => {
      const result = calculateWidth('0')
      expect(result).toBe('1%')
    })
    test('should return the size for digit 4', () => {
      const result = calculateWidth('4')
      expect(result).toBe('2%')
    })
    test('should return the size for digit 8', () => {
      const result = calculateWidth('8')
      expect(result).toBe('3%')
    })
  })
})

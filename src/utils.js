export const calculateChecksum = barcode => {
  const sums = barcode.split('').reduce(
    (acc, digit, index) => {
      const isOdd = index % 2 === 0
      const digitValue = parseInt(digit, 10)

      if (isOdd) {
        return {
          ...acc,
          odd: acc.odd + digitValue
        }
      }

      return {
        ...acc,
        even: acc.even + digitValue
      }
    },
    {
      odd: 0,
      even: 0
    }
  )

  const sumTogether = sums.odd * 3 + sums.even
  const remainder = sumTogether % 10

  return remainder === 0 ? 0 : 10 - remainder
}

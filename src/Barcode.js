import React from 'react'

import './Barcode.css'

const Barcode = ({ barcode }) => {
  const digits = barcode.split('')

  return (
    <div className="barcode__container">
      {digits.map((digit, index) => (
        <Digit key={index} digit={digit} />
      ))}
    </div>
  )
}

const calculateHeight = digit => {
  const remainder = digit % 4
  return `${remainder * 50 + 50}px`
}

const calculateWidth = digit => {
  if (digit < 4) return '20px'
  if (digit < 8) return '40px'
  return '80px'
}

const Digit = ({ digit }) => {
  return (
    <div
      className="barcode__digit"
      style={{
        backgroundColor: 'blue',
        height: calculateHeight(digit),
        width: calculateWidth(digit)
      }}
    >
      {digit}
    </div>
  )
}

export default Barcode

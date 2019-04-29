import React from 'react'

import { calculateChecksum } from './utils'

import './Barcode.css'

const Barcode = ({ barcode }) => {
  const digits = barcode.split('')
  const primaryColor = 'blue'
  const secondaryColor = 'red'

  return (
    <div className="barcode__container">
      {digits.map((digit, index) => (
        <Digit key={index} color={primaryColor} digit={digit} />
      ))}
      <Digit color={secondaryColor} digit={calculateChecksum(barcode)} />
    </div>
  )
}

const calculateHeight = digit => {
  const remainder = digit % 4
  return `${remainder * 50 + 50}px`
}

const calculateWidth = digit => {
  // Width of the screen (100%) / 20 (maximun columns on barcode) = 5%
  // 1% of margin on lateral side
  if (digit < 4) return '1%'
  if (digit < 8) return '2%'
  return '3%'
}

const Digit = ({ color, digit }) => {
  return (
    <div
      className="barcode__digit"
      style={{
        backgroundColor: color,
        height: calculateHeight(digit),
        width: calculateWidth(digit)
      }}
    >
      {digit}
    </div>
  )
}

export default Barcode

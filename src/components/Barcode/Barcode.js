import React from 'react'

import { calculateChecksum, calculateHeight, calculateWidth } from '../../utils'

import './Barcode.css'

const Barcode = ({ barcode, primaryColor, secondaryColor }) => {
  const digits = barcode.split('')

  return (
    <div className="barcode__container">
      {digits.map((digit, index) => (
        <Digit key={index} color={primaryColor} digit={digit} />
      ))}
      <Digit color={secondaryColor} digit={calculateChecksum(barcode)} />
    </div>
  )
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

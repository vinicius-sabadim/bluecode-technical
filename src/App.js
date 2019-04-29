import React, { useState } from 'react'

import Barcode from './Barcode'

import './App.css'

const App = () => {
  const [barcode, setBarcode] = useState('0123456789')

  const handleChangeBarcode = barcode => {
    if (barcode.length > 19) return

    const numberRegex = /^\d*$/
    if (numberRegex.test(barcode)) {
      setBarcode(barcode)
    }
  }

  return (
    <div className="app__container">
      <h1 className="app__title">Bluecode front-end tech test</h1>
      <input
        className="app__input"
        data-testid="barcode"
        type="text"
        value={barcode}
        onChange={e => handleChangeBarcode(e.target.value)}
      />

    { barcode && <Barcode barcode={barcode} /> }
    </div>
  )
}

export default App

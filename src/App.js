import React, { useState } from 'react'
import { HuePicker } from 'react-color'

import Barcode from './Barcode'

import './App.css'

const App = () => {
  const [barcode, setBarcode] = useState('0123456789')
  const [primaryColor, setPrimaryColor] = useState('#0693e3')
  const [secondaryColor, setSecondaryColor] = useState('#004dcf')

  const handleChangeBarcode = barcode => {
    if (barcode.length > 19) return

    const numberRegex = /^\d*$/
    if (numberRegex.test(barcode)) {
      setBarcode(barcode)
    }
  }

  const handleChangePrimaryColor = ({ hex }) => {
    setPrimaryColor(hex)
  }

  const handleChangeSecondaryColor = ({ hex }) => {
    setSecondaryColor(hex)
  }

  return (
    <div className="app__container">
      <h1 className="app__title">Bluecode front-end tech test</h1>
      <div className="app__adjusts">
      <input
        className="app__input"
        data-testid="barcode"
        type="text"
        value={barcode}
        onChange={e => handleChangeBarcode(e.target.value)}
      />
      <div className="app__colors">
        <label className="app__label">
          <span>Primary</span>
          <HuePicker
            color={primaryColor}
            width="300px"
            onChange={handleChangePrimaryColor}
          />
        </label>
        <label className="app__label">
          <span>Secondary</span>
          <HuePicker
            color={secondaryColor}
            width="300px"
            onChange={handleChangeSecondaryColor}
          />
        </label>
      </div>
    </div>

      {barcode && (
        <Barcode
          barcode={barcode}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      )}
    </div>
  )
}

export default App

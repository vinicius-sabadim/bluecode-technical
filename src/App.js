import React, { useState } from 'react'

import Barcode from './Barcode'
import Colors from './Colors'

import './App.css'

const App = () => {
  const [barcode, setBarcode] = useState('')
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
          placeholder="Barcode"
          type="text"
          value={barcode}
          onChange={e => handleChangeBarcode(e.target.value)}
        />
        <Colors
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          onChangePrimaryColor={handleChangePrimaryColor}
          onChangeSecondaryColor={handleChangeSecondaryColor}
        />
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

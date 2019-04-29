import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [barcode, setBarcode] = useState('')

  const handleChangeBarcode = barcode => {
    if (barcode.length > 19) return

    const numberRegex = /^\d*$/
    if (numberRegex.test(barcode)) {
      setBarcode(barcode)
    }
  }

  return (
    <div className="container">
      <input
        data-testid="barcode"
        type="text"
        value={barcode}
        onChange={e => handleChangeBarcode(e.target.value)}
      />
    </div>
  )
}

export default App

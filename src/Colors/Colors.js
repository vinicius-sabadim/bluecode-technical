import React from 'react'
import { HuePicker } from 'react-color'

import './Colors.css'

const Colors = ({
  primaryColor,
  onChangePrimaryColor,
  secondaryColor,
  onChangeSecondaryColor
}) => {
  return (
    <div className="colors__container">
      <label className="colors__label">
        <span>Primary</span>
        <HuePicker
          color={primaryColor}
          width="300px"
          onChange={onChangePrimaryColor}
        />
      </label>
      <label className="colors__label">
        <span>Secondary</span>
        <HuePicker
          color={secondaryColor}
          width="300px"
          onChange={onChangeSecondaryColor}
        />
      </label>
    </div>
  )
}

export default Colors

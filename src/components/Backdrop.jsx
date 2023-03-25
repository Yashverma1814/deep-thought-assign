import React from 'react'

export const Backdrop = ({sidebar,closeSlider}) => {
  return (
    <div className={sidebar?'backdrop backdrop--open':'backdrop'} onClick={closeSlider}>

    </div>
  )
}

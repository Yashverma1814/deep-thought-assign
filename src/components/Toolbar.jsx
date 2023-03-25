import React from 'react'

export const Toolbar = ({openSlider}) => {
  return (
    <div onClick={openSlider}>
        <div className='cardMainDivToolbar'>
            <div className='cardHeadingIconToolbar'>
                <div className="cardHeadingToolbar"></div>
            </div>
            <div className='cardSecondPartToolbar'>
                <button className='toolbarBtn'>1</button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const Card = () => {
  return (
    <div className='cardMainDiv'>
        <div className='cardHeadingIcon'>
            <div className="cardHeading">Heading</div>
            <div className="infoIcon">
                <InfoOutlinedIcon style={{color:'white'}}/>
            </div>
        </div>
        <div className='cardSecondPart'>
            <div className="descriptionDiv">
                Description: des
            </div>
            <div className='cardContentDiv'>
                content
            </div>
        </div>
    </div>
  )
}

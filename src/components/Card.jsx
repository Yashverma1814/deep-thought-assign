import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Video } from './Video';
import { ThreadBuilder } from './ThreadBuilder';
import { Notepad } from './Notepad';
import { ThreadShower } from './ThreadShower';

export const Card = ({val}) => {
    console.log(val.asset_title);
  return (
    <div className='cardMainDiv'>
        <div className='cardHeadingIcon'>
            <div className="cardHeading">{val.asset_title}</div>
            <div className="infoIcon">
                <InfoOutlinedIcon style={{color:'white'}}/>
            </div>
        </div>
        <div className='cardSecondPart'>
            <div className="descriptionDiv">
                Description: {val.asset_description}
            </div>
            <div style={{borderTop:'0.1px solid gainsboro', marginBottom:'1rem'}}></div>
            <div className='cardContentDiv'>
                {val.asset_content_type==='video'?<Video link={val.asset_content}/>:
                val.asset_content_type==="threadbuilder"?<ThreadBuilder />:
                val.asset_content_type==="article"&&val.asset_type==="input_asset"?<Notepad />:
                val.asset_content_type==="article"&&val.asset_type==="display_asset"?<ThreadShower link={val.asset_content}/>:""}
            </div>
        </div>
    </div>
  )
}

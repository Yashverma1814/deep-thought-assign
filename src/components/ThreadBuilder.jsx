import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const ThreadBuilder = ({data}) => {
  return (
    <div>
      <div style={{display:'flex',flexDirection:"row"}}>
        <div><KeyboardArrowUpIcon /></div>
        <div style={{marginLeft:'3rem',fontSize:'1.2rem',fontWeight:'600'}}>Thread A</div>
      </div>
    </div>
  )
}

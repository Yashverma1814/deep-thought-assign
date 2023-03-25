import React from 'react'

export const ThreadShower = ({link}) => {
  return (
    <div>
      <iframe src={link} frameborder="0" style={{width:'100%'}} ></iframe>
    </div>
  )
}

import React from 'react'

export const Video = ({link}) => {
  return (
    <div>
      <iframe width="495" height="315" src={link} frameborder="0" ></iframe>
    </div>
  )
}

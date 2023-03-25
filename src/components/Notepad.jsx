import JoditEditor from 'jodit-react'
import React from 'react'

export const Notepad = () => {
  return (
    <div>
      <div className='notepadHeading'>Title</div>
      <div><input type="text" className='notepadInput'/></div>
      <div className='notepadHeading'>Content</div>
      <JoditEditor />
    </div>
  )
}

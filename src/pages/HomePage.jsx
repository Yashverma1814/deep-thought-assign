import React from 'react'
import { Navbar } from '../components/Navbar'


export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <div className='heading-submit-div'>
            <div className='headingDiv'>Technical Project Management</div>
            <div><button className='submitTaskBtn'>Submit Task</button></div>
        </div>
    </div>
  )
}

import React from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Tagbar } from '../components/Tagbar'


export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <div className='heading-submit-div'>
            <div className='headingDiv'>Technical Project Management</div>
            <div><button className='submitTaskBtn'>Submit Task</button></div>
        </div>
        <div>
          <Tagbar />
        </div>
        <Card />
    </div>
  )
}

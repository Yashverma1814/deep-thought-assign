import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Tagbar } from '../components/Tagbar'

export const HomePage = () => {

  const [data,setData] = useState('');

  const fetchData = () => {
    fetch(`http://localhost:8000/assets`)
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      setData(res);
      console.log(res);
      console.log(data)
    })
  }

  useEffect(()=>{
    fetchData();
    console.log(data)
  },[]);

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
        <div className="allCardDiv">
          {data.map((el)=>{
            return <div key={el.asset_id}>
              <Card val={el}/>
            </div>
          })
          }
        </div>
    </div>
  )
}

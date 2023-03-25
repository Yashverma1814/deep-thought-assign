import React from 'react'

export const JourneyBoard = ({sidebar}) => {
  return (
    <div>
        <div className={sidebar?'cardMainDivBoard cardMainDivBoard--open':'cardMainDivBoard'}>
            <div className='cardHeadingIconBoard'>
                <div className="cardHeadingBoard">Journey Board</div>
            </div>
            <div className='cardSecondPartBoard'>
                <div className="descriptionDiv">
                    <ul>
                        <li style={{fontWeight:'600', marginTop:'1rem', marginBottom:'1rem'}}>Explore the world of management</li>
                        <ul>
                            <li>Technical Project Management</li>
                            <li>Threadbuild</li>
                            <li>Structure your pointers</li>
                            <li>4SA Method</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Photo.css'
import photo from "../../user.jpg"

function Photo () {

  return (
    <div className='home__photo'>
        <img className='photo' src={photo} alt="John Doe" />
    </div>
  )
}

export default Photo

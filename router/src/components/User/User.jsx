import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid} = useParams()
  return (
    <div className='bg-gray-400 text-white text-2xl px-4'>User:{Userid} </div>
  )
}

export default User
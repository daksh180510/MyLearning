import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
     fetch('https:api.github.com/user/daksh1006')
      .then(response=>response.json)
      .then(data=>{
        console.log(data);
      })  
    },[]
    )
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl' >Github followers:{data.followers}
    <img src ="https://avatars.githubusercontent.com/u/160760101?s=400&u=592d87965dbbfefd7b0011a7913317d9f35f747d&v=4" alt='Git picture' width={300}/>
    </div>
  )
}

export default Github
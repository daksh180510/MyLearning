import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar=()=> {
    const [extended,setextended]=useState(false)
    const {onSent,prevpromts,setRecentpromt,newchat}=useContext(Context)

    const loadpromt= async(prompt)=>{
        setRecentpromt(prompt)
       await onSent(prompt)
    }
  return (
    <div className='Sidebar'>
        <div className='top'>
            <img onClick={()=> setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=''/>
            <div onClick={()=>newchat()} className='new-chat'>
                <img src={assets.plus_icon} alt=""/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevpromts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadpromt(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,18)}...</p>
                    </div>
                    )
                })}
               
            </div>
            :null}
        </div>
        <div className='bottom'>
        <div className="bottomitem recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottomitem recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottomitem recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
        </div>
        </div>
    </div>
  )
}

export default Sidebar
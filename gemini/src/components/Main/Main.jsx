import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

    const {onSent,recentpromt,showresult,loading,resultdata,setinput,input}=useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Daksh AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showresult
        ?<>

        <div className="greet">
          <p><span>Hello, Daksh</span></p>
          <p> हुकुम करो मेरे आका...</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Why to become an Engineer</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Talk to us, we’re listening!</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
            <img src={assets.user_icon} alt=''/> 
            <p>{recentpromt}</p>
            </div>
            <div className="result-data">
               <img src={assets.gemini_icon} alt="" /> 
               {loading
               ?<div className='loader'>
                <hr />
                <hr />
                <hr />
               </div>
               :<p dangerouslySetInnerHTML={{__html:resultdata}}></p>   
            }
               
            </div>
         </div>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder="मेरी ज़िंदगी का मकसद आपके आदेश में ही है, सरकार।" />
            <div className="icons">
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
             {input?<img onClick={() => onSent()} src={assets.send_icon} alt="Send" />:null} 
            </div>
          </div>
        </div>       
      </div>
      <footer className="bottom-info" >
         
        </footer>
    </div>
  );
}

export default Main;

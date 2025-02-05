import { createContext, useState } from "react";
import run from "../config/gemini";

 export const Context=createContext();
 const ContextProvider = (props)=>{
    const [input,setinput]=useState("")
    const [recentpromt,setRecentpromt]=useState("")
    const [prevpromts,setprevpromts]=useState([])
    const [showresult,setshowresult]=useState(false)
    const [loading,setloading]=useState(false)
    const [resultdata,setresultdata]=useState("")
    const delaypara=(index,nextWord)=>{
        setTimeout(function(){
            setresultdata(prev=>prev+nextWord)
        },75*index)
    }
    const newchat=()=>{
        setloading(false)
        setshowresult(false)
    }
    const onSent = async (prompt)=>{

        setresultdata("")
        setloading(true)
        setshowresult(true)
        let response;
        if (prompt !==undefined) {
            response=await run(prompt)
            setRecentpromt(prompt)
            //setRecentpromt(input)
           // setprevpromts(prev=>[...prev,input])
           //const response =await run(input) 
        }
        else{
            setprevpromts(prev=>[...prev,input])
            setRecentpromt(input)
            response=await run(input)
        }
        
       let responseArray= response.split("**");
       let newresponse="";
       for(let i=0;i<responseArray.length;i++)
       {
        if(i==0 || i%2 !=1){
            newresponse+=responseArray[i];
        }
        else{
            newresponse+="<b>"+responseArray[i]+"</b>";
        }
       }
       let newresponse2=newresponse.split("*").join("</br>")
       let newresponseArray=newresponse2.split(" ");
       for(let i=0;i<newresponseArray.length;i++ ){
        const nextWord=newresponseArray[i];
        delaypara(i,nextWord+" ");
       }
       setloading(false)
       setinput("")
    }
    
    const contextValue={

        prevpromts,
        setprevpromts,
        onSent,
        setRecentpromt,
        recentpromt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,
        newchat


    }
    return(
        <Context.Provider value={contextValue}>
                {props.children}
        </Context.Provider>
    )
 }
 export default ContextProvider
import React from 'react';
import { useState } from 'react';
// it return an array,previous state and next state,hatja(disadvantage)-no class component,conditional operator,

const Content = () => {
      const [changename,Setchangename]=useState("grow"); 
    function NameChange(){
         

        const arr=["grow","give","Earn"]
        const num=Math.floor(Math.random()*3);
        Setchangename(arr[num])  ;
    }
    




  return (
    <div>
      Subscribe to Mukesh
      <p>Let's {changename} Money</p>
      {/* it has the parameter function which is execute in the load of the website. */}
      
      <button onClick={NameChange}>subscribe</button>
      {/* if we use parameter,the only way is to implement the anonymous function */}
     
      

    </div>
  )
}

export default Content

import React from 'react';
import Itemlist from "./Itemlist";

// it return an array,previous state and next state,hatja(disadvantage)-no class component,conditional operator,

const Content = ({array,Changestate,Deletefunction}) => {
  
    
    
  return (
   <main>
    {array.length?(
      <Itemlist 
      array={array}
      Changestate={Changestate}
      Deletefunction={Deletefunction}
      />

    ):(<p>List is empty</p>)}
      
   </main>
  )
}
export default Content

import React from 'react';
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
// it return an array,previous state and next state,hatja(disadvantage)-no class component,conditional operator,

const Content = () => {
  const [array,setArray]=useState(
    [
      {id:1,checked:true,content:"coder"},
      {id:2,checked:true,content:"cricketer"},
      {id:3,checked:true,content:"soccer"}
    ]
  )
  const changestate = (id)=>{
    const changechecklist=array.map((item)=>
      item.id===id?{...item,checked:!item.checked}:item
    
    )
    setArray(changechecklist)
    localStorage.setItem("to_do_list",JSON.stringify(changechecklist))
  }
  const deletefunction=(id)=>{
    const afterdeletelist=array.filter((item)=>
      item.id!=id
      
    )
    setArray(afterdeletelist)
    
  }
    
    
  return (
   <main>
    {array.length?(
      <ul>
        {array.map((role)=>(
          <li key={role.id}>
            <input type="checkbox"
            checked={role.checked} onChange={()=>changestate(role.id)}
             />
          <label  style={role.checked?{textDecoration:'line-through'}:null}onDoubleClick={()=>changestate(role.id)}>{role.content}</label>
          <FaTrash role='button' tabIndex={0

          } onClick={()=>deletefunction(role.id)}/>
          </li>
        ))}
      </ul>

    ):(<p>List is empty</p>)}
      
   </main>
  )
}
export default Content

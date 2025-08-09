import React from 'react'
import { FaTrash } from "react-icons/fa";
const Itemline = ({role,Changestate,Deletefunction}) => {
  return (
    <li >
            <input type="checkbox"
            checked={role.checked} onChange={()=>Changestate(role.id)}
             />
          <label  style={role.checked?{textDecoration:'line-through'}:null}onDoubleClick={()=>Changestate(role.id)}>{role.content}</label>
          <FaTrash role='button' tabIndex={0

          } aria-label="delete icon"onClick={()=>Deletefunction(role.id)}/>
          </li>
  )
}

export default Itemline

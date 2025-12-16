import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,changedickmark,deleteitem}) => {
  return (
    <li className='item' key={item.id}>
            <input 
            
            type='checkbox'
            checked={item.checked}
            onChange={()=>changedickmark(item.id)}
            
          />
          <label 
          onDoubleClick={()=>changedickmark(item.id)}
          style={item.checked?{textDecoration:'line-through'}:null}
            >{item.value}</label>
          <FaTrashAlt
          role='button'
          
          onClick={()=>deleteitem(item.id)}
          tabIndex='0'
          aria-label={`Delete ${item.value}`}
          />
          </li>
  )
}

export default LineItem
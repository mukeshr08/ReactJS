import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
    const [items,setItems]=useState(
      [
        {id:1,
          checked:true,
          value:"wake up at 5:00 am"
        },
        {id:2,
          checked:false,
          value:"read newspaper"
        },
        {id:3,
          checked:true,
          value:"complete breakfast"
        },
      ]
    )
    const changedickmark=(id)=>{
      const listItems=items.map((item)=>(
        item.id===id ?{...item,checked:!item.checked}:item
      ))
      setItems(listItems)
      localStorage.setItem('To-Do list',JSON.stringify(listItems))
    }
    const deleteitem=(id)=>{
      const listItems=items.filter((item)=>item.id!==id)
      setItems(listItems)
      localStorage.setItem('To-Do list',JSON.stringify(listItems))
    }
  return (
    <main>
      {items.length?(
        <ul>
        {items.map((item)=>(
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
          />
          </li>
        ))}
      </ul>
      ):
      <p>list is empty</p>
    }
    </main>
  )
}

export default Content
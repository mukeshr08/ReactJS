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
    
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input 
            type='checkbox'
            checked={item.checked}
          />
          <label>{item.value}</label>
          <FaTrashAlt/>
          </li>
        ))}
      </ul>
        
    </main>
  )
}

export default Content
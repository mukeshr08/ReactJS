import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const AddItem = ({addnewItem,setaddnewItem,handleaddnewItem}) => {
  const inputRef=useRef()
  return (
    <form action="" className='addForm' onSubmit={handleaddnewItem}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        type="text" 
        ref={inputRef}
        id="addItem"
        autoFocus
        placeholder='Add Item'
        required
        value={addnewItem}
        onChange={(e)=>setaddnewItem(e.target.value)}
        />
        <button
        type='submit'
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
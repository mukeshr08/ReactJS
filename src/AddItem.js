import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,SetnewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            ref={inputRef} 
            autoFocus 
            placeholder='Add Item' 
            id="addItem" 
            required 
            value={newItem}
            onChange={(e)=>SetnewItem(e.target.value)}
        />
        <button>
            <FaPlus 
            type='submit'
            aria-label='Add Item'
            onClick={()=> inputRef.current.focus()}
        />
        </button>
        
    </form>
    
  )
}

export default AddItem

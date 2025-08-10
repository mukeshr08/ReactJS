import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,SetnewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text" 
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
        />
        </button>
        
    </form>
    
  )
}

export default AddItem

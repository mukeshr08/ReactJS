import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({addnewItem,setaddnewItem,handleaddnewItem}) => {
  return (
    <form action="" className='addForm' onSubmit={handleaddnewItem}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        type="text" 
        id="addItem"
        autoFocus
        placeholder='Add Item'
        required
        value={addnewItem}
        onChange={(e)=>setaddnewItem(e.target.value)}
        />
        <button
        type='submit'
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
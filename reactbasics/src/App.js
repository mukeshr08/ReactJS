
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

import Header from './Header';
import { useState,useEffect } from 'react'
import SearchItem from './SearchItem';

function App() {
  const [items,setItems]=useState(
        JSON.parse(localStorage.getItem('To-Do list'))
      )
      const [addnewItem,setaddnewItem]=useState('')
      const [searchItem,setsearchItem]=useState('')
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
      const formatnewItem=(Item)=>{
        const id=items.length?items[items.length-1].id+1:1
        const newItem={id,checked:false,item:Item}
        const listItems=[...items,newItem]
        setItems(listItems)
        localStorage.setItem('TO-Do list',JSON.stringify(listItems))
      }
      const handleaddnewItem=(e)=>{
        e.preventDefault();
        console.log('submitted')
        formatnewItem(addnewItem)
        if(!addnewItem)return;
        setaddnewItem('')
      }
      useEffect(()=>{
        JSON.parse(localStorage.getItem('To-Do list'))

      },[])
  return (
    <div className="App">
      <Header 
        title="Daily Tasks"
      />
      <AddItem
      addnewItem={addnewItem}
      setaddnewItem={setaddnewItem}
      handleaddnewItem={handleaddnewItem}
      />
      <SearchItem
      searchItem={searchItem}
      setsearchItem={setsearchItem}
      />
      <Content 
        items={items.filter(item=>(item.item).toLowerCase().includes(searchItem.toLowerCase()))}
        changedickmark={changedickmark}
        deleteitem={deleteitem}
        
      />
      <Footer 
        length={items.length}
      />
      
    </div>
  );
}

export default App;

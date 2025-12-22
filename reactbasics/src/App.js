
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

import Header from './Header';
import { useState,useEffect } from 'react'
import SearchItem from './SearchItem';

function App() {
      const [items,setItems]=useState([])
      const [addnewItem,setaddnewItem]=useState('')
      const [searchItem,setsearchItem]=useState('')
      const[fetchError,setfetchError]=useState(null)
      const[isLoading,setisLoading]=useState(true)
      const API_URL="http://localhost:3500/items"
      const changedickmark=(id)=>{
        const listItems=items.map((item)=>(
          item.id===id ?{...item,checked:!item.checked}:item
        ))
        setItems(listItems)
        
      }
      const deleteitem=(id)=>{
        const listItems=items.filter((item)=>item.id!==id)
        setItems(listItems)
        
      }
      const formatnewItem=(Item)=>{
        const id=items.length?items[items.length-1].id+1:1
        const newItem={id,checked:false,item:Item}
        const listItems=[...items,newItem]
        setItems(listItems)
        
      }
      const handleaddnewItem=(e)=>{
        e.preventDefault();
        console.log('submitted')
        formatnewItem(addnewItem)
        if(!addnewItem)return;
        setaddnewItem('')
      }
      useEffect(()=>{
        const fetchdata=async()=>{
        try{
            
            const response =await fetch(API_URL)
            console.log(response)
            if(!response.ok) throw Error('Data not received')
            const listItems=await response.json()
            console.log(listItems)
            setItems(listItems)
            setfetchError(null)
          }
        catch(err){
          setfetchError(err.message)
        }
      finally{
          setisLoading(false)
        }}
        setTimeout(()=>{
            (async()=> await fetchdata())()
        },2000)

        
        
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
      <main>
      {isLoading && <p>Loading Time ...</p>}
      {fetchError && <p>{`Error${fetchError}`}</p>}
      {!isLoading && !fetchError &&
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
        changedickmark={changedickmark}
        deleteitem={deleteitem}
        
      />}
      </main>
      <Footer 
        length={items.length}
      />
      
    </div>
  );
}

export default App;

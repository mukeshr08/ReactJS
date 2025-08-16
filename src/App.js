import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App(){
  const [array,setArray]=useState([])
    
    useEffect(()=>{
      JSON.parse(localStorage.getItem("to_do_list"))
    },[])
    

  const [newItem,SetnewItem]=useState('')
  const [searchItem,SetsearchItem]=useState('')

  const addItem=(item)=>{
    const id=array.length?array[array.length-1].id+1:1;
    const addNewItem={id,checked:false,content:item}
    const listItems=[...array,addNewItem]
    setArray(listItems)
    localStorage.setItem("to_do_list",JSON.stringify(listItems))
  }
    const Changestate = (id)=>{
      const changechecklist=array.map((item)=>
        item.id===id?{...item,checked:!item.checked}:item
        
      )
      setArray(changechecklist)
      localStorage.setItem("to_do_list",JSON.stringify(changechecklist));
    }
    const Deletefunction=(id)=>{
      const afterdeletelist=array.filter((item)=>
        item.id!=id
        
      )
      setArray(afterdeletelist)
      localStorage.setItem("to_do_list",JSON.stringify(afterdeletelist));
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!newItem) return
      addItem(newItem)
      SetnewItem('')

      
    }
    const listLength=array.length
  return(
  <div>
  
    <Header  title="Mukesh"/>
    {/*   if we remove the value of the parameter is to remove the whole parameter  */}
    <AddItem 
      newItem={newItem}
      SetnewItem={SetnewItem}
      handleSubmit={handleSubmit}
    />
    <SearchItem 
      searchItem={searchItem}
      SetsearchItem={SetsearchItem}
    />
    <Content 
      array={array.filter((item)=>((item.content).toLowerCase()).includes(searchItem.toLowerCase()))}
      Changestate={Changestate}
      Deletefunction={Deletefunction}
    />
    <Footer
    listLength={listLength}
    />
  
  </div>
  );

}
export default App;
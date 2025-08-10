import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import AddItem from "./AddItem";
function App(){
  const [array,setArray]=useState(
      [
        {id:1,checked:true,content:"coder"},
        {id:2,checked:true,content:"cricketer"},
        {id:3,checked:true,content:"soccer"}
      ]
    )
  const [newItem,SetnewItem]=useState('')

  const addItem=(iteme)=>{
    const id=array.length?array[array.length-1].id+1:1
    const addNewItem={id,checked:false,iteme}
    const listItem=[...array,addNewItem]
    setArray(listItem)
    localStorage.setItem("to_do_list",JSON.stringify(listItem))
  }
    const Changestate = (id)=>{
      const changechecklist=array.map((item)=>
        item.id===id?{...item,checked:!item.checked}:item
      
      )
      setArray(changechecklist)
      localStorage.setItem("to_do_list",JSON.stringify(changechecklist))
    }
    const Deletefunction=(id)=>{
      const afterdeletelist=array.filter((item)=>
        item.id!=id
        
      )
      setArray(afterdeletelist)
      localStorage.setItem("to_do_list",JSON.stringify(afterdeletelist))
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
    <Content 
    
    array={array}
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
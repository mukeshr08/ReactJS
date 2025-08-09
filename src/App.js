import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
function App(){
  const [array,setArray]=useState(
      [
        {id:1,checked:true,content:"coder"},
        {id:2,checked:true,content:"cricketer"},
        {id:3,checked:true,content:"soccer"}
      ]
    )
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
      
    }
    const listLength=array.length
  return(
  <div>
    <Header  title="Mukesh"/>
    {/*   if we remove the value of the parameter is to remove the whole parameter  */}
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
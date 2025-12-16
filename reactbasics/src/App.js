
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'

function App() {
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
  return (
    <div className="App">
      <Header 
        title="Daily Tasks"
      />
      <Content 
        items={items}
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

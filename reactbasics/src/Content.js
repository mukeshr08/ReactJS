import React from 'react'


import ListItems from './ListItems';
const Content = ({items,changedickmark,deleteitem}) => {
    
  return (
    <main>
      {items.length?(
        <ListItems
          items={items}
          changedickmark={changedickmark}
          deleteitem={deleteitem}
        />
      ):
      <p className='p'>list is empty</p>
    }
    </main>
  )
}

export default Content
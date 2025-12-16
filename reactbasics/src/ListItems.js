import React from 'react'

import LineItem from './LineItem';
const ListItems = ({items,changedickmark,deleteitem}) => {
  return (
    <ul>
        {items.map((item)=>(
          <LineItem
            item={item}
            key={item.id}
            changedickmark={changedickmark}
            deleteitem={deleteitem}
          />
        ))}
      </ul>
  )
}

export default ListItems
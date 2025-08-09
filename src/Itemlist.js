import React from 'react'
import Itemline from './Itemline'

const Itemlist = ({array,Changestate,Deletefunction}) => {
  return (
    <ul>
        {array.map((role)=>(
          <Itemline
          key={role.id}
          role={role}
          Changestate={Changestate}
          Deletefunction={Deletefunction}
          />
        ))}
      </ul>
  )
}

export default Itemlist

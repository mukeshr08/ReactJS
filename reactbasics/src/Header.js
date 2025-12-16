import React from 'react'

const Header = ({title}) => {
  return (
    <header 
    className="header
    "style={{backgroundColor:'blue',
        color:'red'
    }
        
    }>
        <h1>{title}</h1>
    </header>
  )
}
Header.defualtProps={
  title:"To-Do List"
}

export default Header
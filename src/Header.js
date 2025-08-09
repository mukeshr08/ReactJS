import React from 'react'

const Header = ({title="To-Do list"}) => {
  // by using the defaultProps is to implement in the Header parameter like above
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )  
}
// Header.defaultProps = {
//     title : "To-Do list"
//   }

export default Header;

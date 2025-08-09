import React from 'react'

const Footer = ({listLength}) => {
    const year=new Date();
  return (
    <footer>copyright &copy; {year.getFullYear()} {listLength} {listLength===1?"item":"items"}</footer>
    
  )
}

export default Footer

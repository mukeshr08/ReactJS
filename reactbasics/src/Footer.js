import React from 'react'

const Footer = () => {
    const currentyear=new Date();
  return (
    <footer>
        <p>
            Copyright &copy; {currentyear.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer
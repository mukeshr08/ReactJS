import React from 'react'

const Content = () => {
    const names=()=>{
      const name=['Earn','Grow','Give']
      const number=Math.floor(Math.random()*3)
       return name[number]
    }
    const clickevent=(e)=>{
      console.log(e.target.innerHTML)
      
      return names
    }
    const returnmsg=()=>{
      console.log("double clicked")
    }
    const clickevent1=(name)=>{
      console.log(`My name is ${name}`)
    }
  return (
    <main>
        <h3 onDoubleClick={returnmsg}>Let's {names()} Money</h3>
        <button onClick={(e)=>clickevent(e)}>click me</button>
    </main>
  )
}

export default Content
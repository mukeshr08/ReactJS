import React from 'react'
import { useState } from 'react'
const Content = () => {
    const names=()=>{
      const name=['Earn','Grow','Give']
      const number=Math.floor(Math.random()*3)
       setNamechange(name[number])
    }
    const [namechange,setNamechange]=useState('Earn')
    const [value,setValue]=useState(99)
    const incrementfunction=()=>{
      setValue((value)=> {return value+1})//this can be return to the function if it repeat then not specify the initial value on the path
      setValue(value+1)//value is first value
      
    }
    const decrementfunction=()=>{
      setValue(value-1)
    }
    
  return (
    <main>
        <h3>Let's {namechange} Money</h3>
        <button onClick={names}>click me</button>
        <button onClick={decrementfunction}>-</button>
        <span>{value}</span>
        <button onClick={incrementfunction}>+</button>
    </main>
  )
}

export default Content
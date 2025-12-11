import React from 'react'

const Content = () => {
    function changename(){
        const name=['Earn','Grow','Give']
        const number=Math.floor(Math.random()*3)
        return name[number]
    }
  return (
    <main>
        <h3>Let's {changename()} Money</h3>
    </main>
  )
}

export default Content
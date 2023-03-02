import React from 'react'
import {useState} from 'react'

function Comp1() {
    const [name,setName]= useState("")

  return (
    <div>
        <h1>Hii I am {name}</h1>
        <button onClick={()=>setName('Sayali Lohot')}>Check name</button>
    </div>
  )
}

export default Comp1
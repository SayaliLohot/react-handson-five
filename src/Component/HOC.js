import React from 'react'

function HOC(props) {
  return (
    <>
    <div style={{color:"green"}}>
    <props.data/>
    </div>
    <div style={{color:"red"}}>
    <props.data/>
    </div>
    
    </>
  )
}

export default HOC
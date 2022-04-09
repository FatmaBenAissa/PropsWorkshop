import React from 'react'

function Me(props) {
    return (
        <div style={{backgroundColor:"black", width:"200px", height:"200px"}}>
          <h1>{props.meperson.name}</h1>  
          {props.children}
        </div>

    )
}

export default Me

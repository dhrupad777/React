import React from 'react'
import "./New.css";

const Objectprops = ({name,address,obj,ninjaA}) => {
  return (
    <div className='main-container'>
        <h1>{name}</h1>
        <h3>{address}</h3>
        <h2>{obj.rent} <br/>{obj.buy}</h2>
        <h1>{ninjaA}</h1>
    </div>
  )
}

export default Objectprops;
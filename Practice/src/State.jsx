import React, {useState} from "react"
import "./State.css"

export default function State(){

const [count, setCount]= React.useState(0);
const [toogle,setToogle]=React.useState(false);

function add(){
    setCount(x => x + 1)//when new value is determined by new value it is advised to use a callback function used here
}
function subtract(){
    setCount(count - 1)
}
function tooglefunc(){
    // setToogle(toogle ? false : true) // now we could do this but the new value depends on ou old value so foe better convention
    setToogle(x => !x)
}

    return(

<>
<h1>
    Below is the counter
</h1>
<div className="container">
<button onClick={subtract}>-</button>
<h2>{count}</h2>
<button onClick={add}>+</button>
</div>

<h1>Below is a toogle function</h1>
<button onClick={tooglefunc} aria-label={`the current value is ${toogle ? "yes":"no"}. click this to chance this to ${!toogle}`}>{toogle ? "yes":"no"}</button>


</>

    )
}

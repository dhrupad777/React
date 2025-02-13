import "./Conditional.css"
import data from "./jokesdata"
import Quizcard from "./Quizcard.jsx"

export default function Conditional(){
const dinoquiz = data.map((dinos)=>{
    return <Quizcard
    
   
    key = {dinos.id} 
    data ={dinos}
    />
})


return(

<>

{dinoquiz}

</>

)
}
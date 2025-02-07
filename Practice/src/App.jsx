import dino from "./jokesdata.js"
import Quizcard from "./Quizcard.jsx"

export default function App() {
const dinoquiz = dino.map((dinos)=>{
    return <Quizcard
    
    // que = {dinos.question}
    // ans = {dinos.answer} So belo we are just passing all through data, and id is needed to help react know if elements are added or deleted to refrence with something(the database data should have id but is not we add them)
    key = {dinos.id} // never remove this see 
    // data ={dinos}//this is used to pass "data" as the mapped array  so in Quizcard.jsx we will write props.data.id
    {...dinos} //this is used to pass the whole object as a prop with its properteis so in Quizcard.jsx we will write props.id
    
    />
})

    return (
        <>

        { /* Remove the comment and enable dinoquiz to see hoe "MAPPING IS DONE BY .map() on components from a source to our desired format to a array of that format is rendered(dinoquiz)"  */                }
         {dinoquiz}



        </>
    )
}
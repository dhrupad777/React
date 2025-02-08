import "./Quizcard.css";

export default function Quizcard(props){

    console.log(props)

// const {que,ans} = props
    return(
<>


<h1 id="que">
    {props.data.question}
</h1>
<h1 id="ans">
    {props.data.answer}
</h1>



</>


    )

}
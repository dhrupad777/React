import "./Quizcard.css";

export default function Quizcard(props) {
    return (
        <div className="Quizcard">
            <h1 id="que">{props.data.question}</h1>
            <button>Answer</button>
            <h1 id="ans">{props.data.answer}</h1>
        </div>
    );
}
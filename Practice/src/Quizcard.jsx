import { useState } from "react";
import "./Quizcard.css";

export default function Quizcard(props) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <>
            <h1 id="que">
                {props.data.question}
            </h1>
            <button onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
            {showAnswer && (
                <h1 id="ans">
                    {props.data.answer}
                </h1>
            )}
        </>
    );
}

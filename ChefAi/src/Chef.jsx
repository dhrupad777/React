import {useState} from "react";
// import Header from "./Components/Header";
// import Content from "./Components/Content";
import "./Chef.css";


export default function Chef() {


    const [items,setItems]= useState([]);

    const handlesubmit = (e) =>{
        const newItem = e.get("item");
        if (newItem.trim()) {
            setItems((prevItems) => [...prevItems, newItem]);
        }


    };













    return (
        <div className="container">
            {/* <Header />
            <Content /> */}
            <div className="card">
                <div className="header">
                    Chef Ai
                </div>
                <form className="form" action={handlesubmit}>
                    <input className="input" type="text" placeholder="       Enter your ingedrients here" name="item">
                        
                    </input>
                    <button  className="button "type="submit" >
                        + Add Ingedrient
                    </button>
                </form>
                <div className="list">
                    <ul>
                        {items.map((x,index)=>(
                         <li key = {index} className="carditem">
                            
                            <span>{x}</span>
                            <button className="delete-button"
                            onClick={() => setItems(items.filter((_, i) => i !== index))}>
                                delete
                            </button>
                            
                        </li>
                            
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    );
}

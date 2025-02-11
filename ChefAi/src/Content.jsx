import React, { useState } from "react";
import "./Content.css";

export default function Content() {
    const [items, setItems] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newItem = formData.get("item");

        if (newItem.trim()) {
            setItems((prevItems) => [...prevItems, newItem]);
            
        }

        e.currentTarget.reset();
    }

    return (
        <div className="content">
            <form onSubmit={handleSubmit} className="addItem">
                <input
                    type="text"
                    placeholder="e.g. Tomato"
                    name="item"
                />
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

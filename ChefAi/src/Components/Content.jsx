// Content.js
import React, { useState } from "react";
import "../Content.css";

export default function Content() {
    const [items, setItems] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        
        
        const newItem = e.get("item");

        if (newItem.trim()) {
            setItems((prevItems) => [...prevItems, newItem]);
        }
        
    };

    const generateRecipes = async () => {
        setLoading(true);
        setError("");
        try {
            // Replace with your actual API endpoint
            const response = await mockApiCall(items);
            setRecipes(response.recipes);
        } catch (err) {
            setError("Failed to fetch recipes. Please try again.");
        }
        setLoading(false);
    };

    const mockApiCall = (items) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    recipes: [
                        {
                            id: 1,
                            title: "Gourmet Pasta",
                            ingredients: ["Tomato", "Basil", "Pasta"],
                            instructions: "Combine all ingredients and cook for 20 minutes"
                        }
                    ]
                });
            }, 1500);
        });
    };

    return (
        <div className="content">
            <form action={handleSubmit} className="addItem">
                <input
                    type="text"
                    placeholder="e.g. Fresh Basil"
                    name="item"
                    autoComplete="off"
                />
                <button type="submit">Add Ingredient</button>
            </form>

            {items.length > 0 && (
                <button 
                    className="generate-btn"
                    onClick={generateRecipes}
                    disabled={loading}
                >
                    {loading ? "Generating Recipes..." : "What Can I Cook?"}
                </button>
            )}

            <ul className="ingredients-grid">
                {items.map((item, index) => (
                    <li key={index} className="card-item">
                        <span className="item-text">{item}</span>
                        <button
                            className="delete-button"
                            onClick={() => setItems(items.filter((_, i) => i !== index))}
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>

            {error && <div className="error-message">{error}</div>}

            <div className="recipes-grid">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <div className="recipe-details">
                            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
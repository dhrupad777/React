import React from "react";
import "../Header.css";  // Ensure this CSS file exists and is correctly linked
import icon from "../assets/Designer.png";  // Ensure this image path is correct

export default function Header() {
    // Function to handle mouse enter event
    function handleMouseEnter() {
        console.log("HI");
    }

    return (
        <>
            {/* Header div with onMouseEnter event */}
            <div className="header" onMouseEnter={handleMouseEnter}>
                {/* Image with logo class */}
                <img src={icon} className="logo" alt="Logo" />
            </div>
        </>
    );
}
// u
import "../Header.css";
import icon from "../assets/Designer.png"; // Ensure this image exists

export default function Header() {
    return (
        <div className="header">
            <img src={icon} className="logo" alt="Logo" />
            <h1 className="header-title">Chef Ai</h1>
        </div>
    );
}
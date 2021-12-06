import {
    NavLink
} from "react-router-dom";


import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className = "website-title">
                <h1 >Mejuri</h1>
                <NavLink exact={true} activeClassName="nav-selected" to="/">View All</NavLink>
            </div>
        </nav>
    )
}
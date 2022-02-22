import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="navbar-dark bg-dark">
        <div className="container">
            <nav>
                <ul className="nav nav-pills flex-column flex-sm-row">
                    <h1 className="header-title">ShareNotes</h1>
                    <li><NavLink exact className="nav-link" to="/">Home</NavLink></li>        
                    <li><NavLink exact className="nav-link" to="/note">Note</NavLink></li>
                    <li><NavLink exact className="nav-link" to="/create">Create</NavLink></li>
                    <li><NavLink exact className="nav-link" to="/about">About</NavLink></li>
                </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/starred">Starred</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
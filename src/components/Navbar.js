import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "2rem", fontSize: "2.5rem" }}>Box Office</h1>
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/starred">Starred</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;
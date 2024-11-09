import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
    const Logout = () => {
        const navigate = useNavigate();
    
        const handleLogout = (event) => {
            event.preventDefault(); // Prevents form submission behavior
            sessionStorage.removeItem('token'); // Remove token from session storage
            navigate('/'); // Navigate to the home page
        }
    }
    return (
        <>
            <nav className="navbar  navbar-expand-lg " style={{ backgroundColor: '#666' }}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/stock">My Pizza Shop</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/account">Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button onClick={Logout} className="btn btn-outline-success" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

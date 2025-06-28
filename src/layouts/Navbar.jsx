import React from 'react';
import {Link, NavLink} from "react-router";
import {Flip, toast} from "react-toastify";

const Navbar = () => {

let token=sessionStorage.getItem('token');

const LogOut = (e) => {
    e.preventDefault();

    sessionStorage.removeItem('token');
    toast.success("Logout successfull!");
    window.location.href = '/login';

}

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand" href="#">App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/products"} className="nav-link" >Product List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/profile"} className="nav-link" >Profile</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {
                                token ? <button onClick={LogOut} className="btn btn-danger" >Logout</button>:
                                    <Link to={"/login"} className="btn btn-primary" >Login</Link>
                            }

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
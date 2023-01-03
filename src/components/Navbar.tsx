import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

export const pages = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Cakes",
        path: "/cakes",
    },
    {
        id: 3,
        name: "Cookies",
        path: "/cookies",
    },
    {
        id: 4,
        name: "Cupcakes",
        path: "/cupcakes",
    },
];

const Navbar = () => {
    return (
        <>
            <header className="navbar-container shadow-sm">
                <nav className="title-container">
                    <Link className="title-link" to={"/"}>
                        <h4>Molly's Specialty Sweets</h4>
                    </Link>
                </nav>
                <nav className="navigation-links">
                    {pages.map(({ id, name, path }) => {
                        if (name === "Create A Cake") {
                            return (
                                <Link
                                    key={id}
                                    className="nav-btns create-a-cake"
                                    to={path}
                                >
                                    {name}
                                </Link>
                            );
                        } else {
                            return (
                                <Link key={id} className="nav-btns" to={path}>
                                    {name}
                                </Link>
                            );
                        }
                    })}
                </nav>
            </header>
        </>
    );
};

export default Navbar;

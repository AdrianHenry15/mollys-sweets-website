import "../styles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import { GiFallingLeaf } from "react-icons/gi";
import { GiLeafSkeleton } from "react-icons/gi";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

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
    {
        id: 5,
        name: "Create",
        path: "/choose-your-sweets",
    },
];

interface INavbarProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Navbar extends React.Component<INavbarProps, {}> {
    //main
    render() {
        return (
            <>
                <header className="navbar-container shadow-sm">
                    <nav className="title-container">
                        <Link className="title-link" to={"/"}>
                            <GiFallingLeaf className="leaf" />
                            <h4>Molly's Specialty Sweets</h4>
                            <GiLeafSkeleton className="leaf" />
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
                                    <Link
                                        key={id}
                                        className="nav-btns"
                                        to={path}
                                    >
                                        {name}
                                    </Link>
                                );
                            }
                        })}
                    </nav>
                </header>
            </>
        );
    }
}

export default Navbar;

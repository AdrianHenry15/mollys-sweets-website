//styles
import "../styles/ComponentStyles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
//icons
import { GiFallingLeaf } from "react-icons/gi";
import { GiLeafSkeleton } from "react-icons/gi";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

//stores
import { GlobalStateStore } from "../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//components
import Cart from "./Cart/Cart";

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
    {
        id: 6,
        name: "Cart",
        path: "/cart",
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
                            } else if (name === "Cart") {
                                return <div key={id}></div>;
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
                    <nav className="cart-link">
                        <Link key="cart" to="/cart" className="cart-btn">
                            <CartIcon className="cart-icon">
                                <Cart />
                            </CartIcon>
                        </Link>
                    </nav>
                </header>
            </>
        );
    }
}

export default Navbar;

// styles
import "../styles/Cart.scss";
// frame
import React from "react";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../store/GlobalStateStore";

//icons
import { GiShoppingCart as EmptyCartIcon } from "react-icons/gi";
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { Link } from "react-router-dom";

export const createPages = [
    {
        id: 1,
        name: "CreateCakes",
        path: "/build-your-cake",
    },
    {
        id: 2,
        name: "CreateCupcake",
        path: "/choose-your-cupcakes",
    },
    {
        id: 3,
        name: "CreateCookies",
        path: "/choose-your-cookies",
    },
];

interface ICartProps {
    store?: GlobalStateStore;
}

interface ICartState {
    cartEmpty: boolean;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps, ICartState> {
    constructor(props: ICartProps) {
        super(props);

        this.state = {
            cartEmpty: true,
        };
    }
    //main
    render() {
        return (
            <section className="cart-main">
                {this.state.cartEmpty && (
                    <div className="empty-cart-container">
                        <h1 className="empty-cart-label">Your Cart Is Empty</h1>
                        <div className="cart-empty-icon">
                            <EmptyCartIcon className="empty-cart-icon" />
                        </div>
                        <nav className="create-links-container">
                            <Link
                                className="create-links"
                                to="/build-your-cake"
                            >
                                <CakeIcon className="create-icons" />
                                <span className="create-icons-label">
                                    Create Cakes
                                </span>
                                <CakeIcon className="create-icons" />
                            </Link>
                            <Link
                                className="create-links"
                                to="/choose-your-cupcakes"
                            >
                                <CupcakeIcon className="create-icons" />
                                <span className="create-icons-label">
                                    Create Cupcakes
                                </span>
                                <CupcakeIcon className="create-icons" />
                            </Link>
                            <Link
                                className="create-links"
                                to="/choose-your-cookies"
                            >
                                <CookieIcon className="create-icons" />
                                <span className="create-icons-label">
                                    Create Cookies
                                </span>
                                <CookieIcon className="create-icons" />
                            </Link>
                        </nav>
                    </div>
                )}
                {!this.state.cartEmpty && <div></div>}
            </section>
        );
    }
}

export default Cart;

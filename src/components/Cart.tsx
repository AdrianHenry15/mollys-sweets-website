// styles
import "../styles/Cart.scss";
// frame
import React from "react";
import { Link } from "react-router-dom";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../store/GlobalStateStore";

//icons
import { GiShoppingCart as EmptyCartIcon } from "react-icons/gi";
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";

//components
import Order from "./Order";

interface ICartProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps, {}> {
    constructor(props: ICartProps) {
        super(props);
    }
    //main
    render() {
        //store variables
        const emptyCartState = this.props.store!.CartStore.cartEmpty;
        return (
            <section className="cart-main">
                {emptyCartState && (
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
                {!emptyCartState && <Order />}
            </section>
        );
    }
}

export default Cart;

// styles
import "../../styles/ComponentStyles/CartStyles/Cart.scss";
// frame
import React from "react";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//components
// import Order from "../Orders/Order";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";

interface ICartProps {
    store?: GlobalStateStore;
}

interface ICartState {
    cakeDropdown: boolean;
    cupcakeDropdown: boolean;
    cookieDropdown: boolean;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps, ICartState> {
    constructor(props: ICartProps) {
        super(props);

        this.state = {
            cakeDropdown: false,
            cupcakeDropdown: false,
            cookieDropdown: false,
        };
    }

    onCakeDropdownClick = () => {
        this.setState({
            cakeDropdown: !this.state.cakeDropdown,
        });
    };
    onCupcakeDropdownClick = () => {
        this.setState({
            cupcakeDropdown: !this.state.cupcakeDropdown,
        });
    };
    onCookieDropdownClick = () => {
        this.setState({
            cookieDropdown: !this.state.cookieDropdown,
        });
    };
    //main
    render() {
        //store variables
        const emptyCartState = this.props.store!.CartStore.cartEmpty;

        // categories
        const cakeCategory = this.props.store!.CategoryStore.cakeCategory;
        const cupcakeCategory = this.props.store!.CategoryStore.cupcakeCategory;
        const cookieCategory = this.props.store!.CategoryStore.cookieCategory;

        return (
            <section className="cart-main">
                <EmptyCart />
                {!emptyCartState && (
                    <div className="cart-filled-container">
                        <div className="cart-container">
                            <h1 className="filled-cart-label">Your Cart</h1>
                            {/* {!cakeCategory && <CakeOrder />}
                            {!cupcakeCategory && <CupcakeOrder />}
                            {!cookieCategory && <CookieOrder />} */}
                        </div>
                        <section className="checkout-total-container">
                            <Link to={"../../login"}>
                                <button className="checkout-btn">
                                    <span>Check Out</span>
                                </button>
                            </Link>
                            <section className="total-container">
                                {/* cakes total */}
                                <div className="total-item-container ">
                                    <div
                                        onClick={() =>
                                            this.onCakeDropdownClick()
                                        }
                                        className="label-container"
                                    >
                                        <CakeIcon className="product-icon" />

                                        <span className="total-label">
                                            Cakes
                                        </span>
                                    </div>
                                    <div className="price"></div>
                                </div>
                                {/* tier */}
                                {this.state.cakeDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Tier:
                                            </label>
                                            <div className="price"></div>
                                        </div>

                                        {/* size */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Size:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* filling */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Filling:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* fruit */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Fruit:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                    </div>
                                )}
                            </section>
                            <section className="total-container">
                                {/* cupcakes */}
                                <div className="total-item-container ">
                                    <div
                                        onClick={() =>
                                            this.onCupcakeDropdownClick()
                                        }
                                        className="label-container"
                                    >
                                        <CupcakeIcon className="product-icon" />
                                        <span className="total-label">
                                            Cupcakes:
                                        </span>
                                    </div>
                                    <div className="price"></div>
                                </div>
                                {/* quantity */}
                                {this.state.cupcakeDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Quantity:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                    </div>
                                )}
                            </section>
                            <section className="total-container">
                                {/* cookies */}
                                <div className="total-item-container ">
                                    <div
                                        onClick={() =>
                                            this.onCookieDropdownClick()
                                        }
                                        className="label-container"
                                    >
                                        <CookieIcon className="product-icon" />
                                        <span className="total-label">
                                            Cookies:
                                        </span>
                                    </div>
                                    <div className="price"></div>
                                </div>
                                {/* quantity */}
                                {this.state.cookieDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Quantity:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price"></div>
                                        </div>
                                    </div>
                                )}
                            </section>
                            <section className="total-container">
                                <div className="total-item-container full-item-container">
                                    <h5 className="full-total-label">Total:</h5>
                                    <div className="full-price"></div>
                                </div>
                            </section>
                        </section>
                    </div>
                )}
            </section>
        );
    }
}

export default Cart;

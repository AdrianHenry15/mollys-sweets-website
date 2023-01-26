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
import { BiDownArrow as DownArrow } from "react-icons/bi";
import { BiRightArrow as RightArrow } from "react-icons/bi";

//components
import Order from "./Order";

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
                {!emptyCartState && (
                    <div className="cart-filled-container">
                        <div className="cart-container">
                            <h1 className="filled-cart-label">Your Cart</h1>
                            <Order />
                        </div>
                        <section className="checkout-total-container">
                            <button className="checkout-btn">
                                <span>Check Out</span>
                            </button>
                            <section className="total-container">
                                {/* cakes total */}
                                <div className="total-item-container ">
                                    <div className="label-container">
                                        <span className="total-label">
                                            Cakes
                                        </span>
                                        {this.state.cakeDropdown ? (
                                            <DownArrow
                                                onClick={() =>
                                                    this.onCakeDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        ) : (
                                            <RightArrow
                                                onClick={() =>
                                                    this.onCakeDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        )}
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
                            <section className="cupcakes-total-container total-container">
                                {/* cupcakes */}
                                <div className="total-item-container ">
                                    <div className="label-container">
                                        <span className="total-label">
                                            Cupcakes
                                        </span>
                                        {this.state.cupcakeDropdown ? (
                                            <DownArrow
                                                onClick={() =>
                                                    this.onCupcakeDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        ) : (
                                            <RightArrow
                                                onClick={() =>
                                                    this.onCupcakeDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        )}
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
                            <section className="cookies-total-container total-container">
                                {/* cookies */}
                                <div className="total-item-container ">
                                    <div className="label-container">
                                        <span className="total-label">
                                            Cookies
                                        </span>
                                        {this.state.cookieDropdown ? (
                                            <DownArrow
                                                onClick={() =>
                                                    this.onCookieDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        ) : (
                                            <RightArrow
                                                onClick={() =>
                                                    this.onCookieDropdownClick()
                                                }
                                                className="arrow-icon"
                                            />
                                        )}
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
                        </section>
                    </div>
                )}
            </section>
        );
    }
}

export default Cart;

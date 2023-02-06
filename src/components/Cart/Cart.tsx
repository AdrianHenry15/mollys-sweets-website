// styles
import "../../styles/CartStyles/Cart.scss";
// frame
import React from "react";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//components
import CakeOrder from "../Orders/CakeOrder";
import EmptyCart from "./EmptyCart";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import TotalContainer from "./TotalContainer";
>>>>>>> 3947191ea26da29bdeaffb860d63810faac58aaa

interface ICartProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps> {
    constructor(props: ICartProps) {
        super(props);
    }
    //main
    render() {
        //store variables
        const emptyCartState = this.props.store!.CartStore.cartEmpty;
        return (
            <section className="cart-main">
                <EmptyCart />
                {!emptyCartState && (
                    <div className="cart-filled-container">
                        <div className="cart-container">
                            <h1 className="filled-cart-label">Your Cart</h1>
                            <CakeOrder />
                        </div>
<<<<<<< HEAD
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
                                    <div className="price">{`$${updateTotalCakeCost()}`}</div>
                                </div>
                                {/* tier */}
                                {this.state.cakeDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Tier:
                                            </label>
                                            <div className="price">
                                                {`$${tierCost}`}
                                            </div>
                                        </div>

                                        {/* size */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Size:
                                            </label>
                                            <div className="price">
                                                {`$${sizeCost}`}
                                            </div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price">
                                                {`$${flavorCost}`}
                                            </div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price">
                                                {`$${frostingCost}`}
                                            </div>
                                        </div>
                                        {/* filling */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Filling:
                                            </label>
                                            <div className="price">
                                                {`$${fillingCost}`}
                                            </div>
                                        </div>
                                        {/* fruit */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Fruit:
                                            </label>
                                            <div className="price">
                                                {`$${fruitCost}`}
                                            </div>
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
                                    <div className="price">{`$${updateTotalCupcakeCost()}`}</div>
                                </div>
                                {/* quantity */}
                                {this.state.cupcakeDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Quantity:
                                            </label>
                                            <div className="price">{`$${cupcakeQuantityCost}`}</div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price">{`$${cupcakeFlavorCost}`}</div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price">{`$${cupcakeFrostingCost}`}</div>
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
                                    <div className="price">{`$${updateTotalCookieCost()}`}</div>
                                </div>
                                {/* quantity */}
                                {this.state.cookieDropdown && (
                                    <div className="product-price-container">
                                        <div className="total-item-container">
                                            <label className="item">
                                                Quantity:
                                            </label>
                                            <div className="price">{`$${cookieQuantityCost}`}</div>
                                        </div>
                                        {/* flavor */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Flavor:
                                            </label>
                                            <div className="price">{`$${cookieFlavorCost}`}</div>
                                        </div>
                                        {/* frosting */}
                                        <div className="total-item-container">
                                            <label className="item">
                                                Frosting:
                                            </label>
                                            <div className="price">{`$${cookieFrostingCost}`}</div>
                                        </div>
                                    </div>
                                )}
                            </section>
                            <section className="total-container">
                                <div className="total-item-container full-item-container">
                                    <h5 className="full-total-label">Total:</h5>
                                    <div className="full-price">{`$${updateTotalCost()}`}</div>
                                </div>
                            </section>
                        </section>
=======
                        <TotalContainer />
>>>>>>> 3947191ea26da29bdeaffb860d63810faac58aaa
                    </div>
                )}
            </section>
        );
    }
}

export default Cart;

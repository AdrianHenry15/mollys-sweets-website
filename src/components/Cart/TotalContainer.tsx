// styles
import "../../styles/CartStyles/Cart.scss";
// frame
import React from "react";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";

import OrderComplete from "../Orders/OrderComplete";
import { Link } from "react-router-dom";

interface ITotalContainerProps {
    store?: GlobalStateStore;
}

interface ITotalContainerState {
    cakeDropdown: boolean;
    cupcakeDropdown: boolean;
    cookieDropdown: boolean;
}

@inject("store")
@observer
class TotalContainer extends React.Component<
    ITotalContainerProps,
    ITotalContainerState
> {
    constructor(props: ITotalContainerProps) {
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
        // product variables from store
        // cakes
        const tierCost = this.props.store!.CakeStore.cakeCosts.tierCost;
        const sizeCost = this.props.store!.CakeStore.cakeCosts.sizeCost;
        const flavorCost = this.props.store!.CakeStore.cakeCosts.flavorsCost;
        const frostingCost =
            this.props.store!.CakeStore.cakeCosts.frostingsCost;
        const fillingCost = this.props.store!.CakeStore.cakeCosts.fillingsCost;
        const fruitCost = this.props.store!.CakeStore.cakeCosts.fruitCost;
        const updateTotalCakeCost =
            this.props.store!.ComputedCakeCosts.computedCosts
                .updateTotalCakeCost;
        //cupcakes
        const cupcakeQuantityCost =
            this.props.store!.CupcakeStore.cupcakeCosts.quantityCost;
        const cupcakeFlavorCost =
            this.props.store!.CupcakeStore.cupcakeCosts.flavorsCost;
        const cupcakeFrostingCost =
            this.props.store!.CupcakeStore.cupcakeCosts.frostingsCost;
        const updateTotalCupcakeCost =
            this.props.store!.ComputedCupcakeCosts.computedCosts
                .updateTotalCupcakeCost;
        //cupcakes
        const cookieQuantityCost =
            this.props.store!.CookieStore.cookieCosts.quantityCost;
        const cookieFlavorCost =
            this.props.store!.CookieStore.cookieCosts.flavorsCost;
        const cookieFrostingCost =
            this.props.store!.CookieStore.cookieCosts.frostingsCost;
        const updateTotalCookieCost =
            this.props.store!.ComputedCookieCosts.computedCosts
                .updateTotalCookieCost;

        // total
        const updateTotalCost =
            this.props.store!.ProductComputeds.updateProductTotal;
        // user
        const loggedIn = this.props.store!.UserStore.loggedIn;
        return (
            <section className="checkout-total-container">
                <button className="checkout-btn">
                    <span>Check Out</span>
                </button>
                <section className="total-container">
                    {/* cakes total */}
                    <div className="total-item-container ">
                        <div
                            onClick={() => this.onCakeDropdownClick()}
                            className="label-container"
                        >
                            <CakeIcon className="product-icon" />

                            <span className="total-label">Cakes</span>
                        </div>
                        <div className="price">{`$${updateTotalCakeCost()}`}</div>
                    </div>
                    {/* tier */}
                    {this.state.cakeDropdown && (
                        <div className="product-price-container">
                            <div className="total-item-container">
                                <label className="item">Tier:</label>
                                <div className="price">{`$${tierCost}`}</div>
                            </div>

                            {/* size */}
                            <div className="total-item-container">
                                <label className="item">Size:</label>
                                <div className="price">{`$${sizeCost}`}</div>
                            </div>
                            {/* flavor */}
                            <div className="total-item-container">
                                <label className="item">Flavor:</label>
                                <div className="price">{`$${flavorCost}`}</div>
                            </div>
                            {/* frosting */}
                            <div className="total-item-container">
                                <label className="item">Frosting:</label>
                                <div className="price">
                                    {`$${frostingCost}`}
                                </div>
                            </div>
                            {/* filling */}
                            <div className="total-item-container">
                                <label className="item">Filling:</label>
                                <div className="price">{`$${fillingCost}`}</div>
                            </div>
                            {/* fruit */}
                            <div className="total-item-container">
                                <label className="item">Fruit:</label>
                                <div className="price">{`$${fruitCost}`}</div>
                            </div>
                        </div>
                    )}
                </section>
                <section className="total-container">
                    {/* cupcakes */}
                    <div className="total-item-container ">
                        <div
                            onClick={() => this.onCupcakeDropdownClick()}
                            className="label-container"
                        >
                            <CupcakeIcon className="product-icon" />
                            <span className="total-label">Cupcakes:</span>
                        </div>
                        <div className="price">{`$${updateTotalCupcakeCost()}`}</div>
                    </div>
                    {/* quantity */}
                    {this.state.cupcakeDropdown && (
                        <div className="product-price-container">
                            <div className="total-item-container">
                                <label className="item">Quantity:</label>
                                <div className="price">{`$${cupcakeQuantityCost}`}</div>
                            </div>
                            {/* flavor */}
                            <div className="total-item-container">
                                <label className="item">Flavor:</label>
                                <div className="price">{`$${cupcakeFlavorCost}`}</div>
                            </div>
                            {/* frosting */}
                            <div className="total-item-container">
                                <label className="item">Frosting:</label>
                                <div className="price">{`$${cupcakeFrostingCost}`}</div>
                            </div>
                        </div>
                    )}
                </section>
                <section className="total-container">
                    {/* cookies */}
                    <div className="total-item-container ">
                        <div
                            onClick={() => this.onCookieDropdownClick()}
                            className="label-container"
                        >
                            <CookieIcon className="product-icon" />
                            <span className="total-label">Cookies:</span>
                        </div>
                        <div className="price">{`$${updateTotalCookieCost()}`}</div>
                    </div>
                    {/* quantity */}
                    {this.state.cookieDropdown && (
                        <div className="product-price-container">
                            <div className="total-item-container">
                                <label className="item">Quantity:</label>
                                <div className="price">{`$${cookieQuantityCost}`}</div>
                            </div>
                            {/* flavor */}
                            <div className="total-item-container">
                                <label className="item">Flavor:</label>
                                <div className="price">{`$${cookieFlavorCost}`}</div>
                            </div>
                            {/* frosting */}
                            <div className="total-item-container">
                                <label className="item">Frosting:</label>
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
        );
    }
}

export default TotalContainer;

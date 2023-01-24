// styles
import "../../styles/CookieBuild/CookieCount.scss";

//frameworks
import React from "react";

//store
import { ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Products";

interface ICookieCountProps {
    store?: GlobalStateStore;
}

interface ICookieCountState {
    cookieSize: string;
}

@inject("store")
@observer
class CookieCount extends React.Component<
    ICookieCountProps,
    ICookieCountState
> {
    constructor(props: ICookieCountProps) {
        super(props);

        this.state = {
            cookieSize: "",
        };
    }

    // functions
    renderCookieCount = () => {
        //data variables
        const regCookieSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.regular;
        const miniCookiesSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.mini;
        if (this.state.cookieSize === ProductSizes.REGULAR) {
            return regCookieSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (productQuantity === "") {
                        return (
                            <option key={`${productQuantity}${id}`} value="0">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={price}
                            >{`${productQuantity} (${productServes}) ($${price})`}</option>
                        );
                    }
                }
            );
        } else {
            return miniCookiesSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (productQuantity === "") {
                        return (
                            <option key={`${productQuantity}${id}`} value="0">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={price}
                            >{`${productQuantity} (${productServes}) ($${price})`}</option>
                        );
                    }
                }
            );
        }
    };
    render() {
        // store variables
        const quantityCost =
            this.props.store!.CookieStore.cookieCosts.quantityCost;
        const cookieSize = this.props.store!.CookieStore.cookieCount.size;
        //store methods
        const setCookieSize =
            this.props.store!.CookieActions.cookieCountActions.setCookieSize;
        const handleQuantityCost =
            this.props.store!.CookieActions.cookieCountActions
                .handleCookieQuantityCost;
        return (
            <section className="cookie-count-container">
                <h3>Choose Cookies</h3>
                <hr />

                {/* What kind of Cupcakes */}
                <div className="cookie-kind-container">
                    <h5 className="cookie-title">What Kind Of Cookies?</h5>
                    <div className="cookie-choice-container">
                        <input
                            value={ProductSizes.REGULAR}
                            type="radio"
                            name="fruit"
                            onChange={(e) => setCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            defaultValue={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => setCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Mini</label>
                    </div>
                </div>

                {/* How many cupcakes */}
                <div className="cookie-make-container">
                    <h5 className="cookie-title">
                        How Many
                        {cookieSize === ProductSizes.REGULAR
                            ? " Regular"
                            : " Mini"}{" "}
                        Cookies
                    </h5>
                    <div className="cookie-choice-container">
                        <div className="cookie-option">
                            <form action="">
                                <select
                                    defaultValue={quantityCost}
                                    onChange={(e) => handleQuantityCost(e)}
                                    name="cake-size"
                                    className="cookie-dropdown"
                                >
                                    {this.renderCookieCount()}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cookie-make-container">
                    <h5 className="cookie-title">Cost</h5>
                    <div>{`$${quantityCost}`}</div>
                </div>
            </section>
        );
    }
}

export default CookieCount;

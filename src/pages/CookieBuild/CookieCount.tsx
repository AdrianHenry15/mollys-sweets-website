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
                            <option key={`${productQuantity}${id}`} value="">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={productQuantity}
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
                            <option key={`${productQuantity}${id}`} value="">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={productQuantity}
                            >{`${productQuantity} (${productServes}) ($${price})`}</option>
                        );
                    }
                }
            );
        }
    };

    setCookieSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.setState({
            cookieSize: value,
        });
    };
    render() {
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
                            onChange={(e) => this.setCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            defaultValue={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.setCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Mini</label>
                    </div>
                </div>

                {/* How many cupcakes */}
                <div className="cookie-make-container">
                    <h5 className="cookie-title">
                        How Many
                        {this.state.cookieSize === ProductSizes.REGULAR
                            ? " Regular"
                            : " Mini"}{" "}
                        Cookies
                    </h5>
                    <div className="cookie-choice-container">
                        <div className="cookie-option">
                            <form action="">
                                <select
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
                    <div>$0.00</div>
                </div>
            </section>
        );
    }
}

export default CookieCount;

// styles
import "../../styles/CookieBuild/CookieCount.scss";

//frameworks
import React, { useState } from "react";

//store
import { ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

interface ICookieCountProps {
    store?: GlobalStateStore;
}

const CookieCount: React.FC<ICookieCountProps> = inject("store")(
    observer(({ store }: ICookieCountProps) => {
        //variables
        const regCookieSizes =
            store!.ProductStore.products.sizes.cupcake_cookie_sizes.regular;
        const miniCookiesSizes =
            store!.ProductStore.products.sizes.cupcake_cookie_sizes.mini;

        //state
        const [cookieSize, setCookieSize] = useState("");

        // functions
        const renderCookieCount = () => {
            if (cookieSize === ProductSizes.REGULAR) {
                return regCookieSizes.map(
                    ({ id, productQuantity, productServes, price }) => {
                        if (productQuantity === "") {
                            return (
                                <option
                                    key={`${productQuantity}${id}`}
                                    value=""
                                >
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
                                <option
                                    key={`${productQuantity}${id}`}
                                    value=""
                                >
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
                            onChange={(e) => setCookieSize(e.target.value)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            defaultValue={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => setCookieSize(e.target.value)}
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
                                    name="cake-size"
                                    className="cookie-dropdown"
                                >
                                    {renderCookieCount()}
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
    })
);

export default CookieCount;

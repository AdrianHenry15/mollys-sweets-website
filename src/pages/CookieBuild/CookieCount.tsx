// styles
import "../../styles/CookieBuild/CookieCount.scss";

//frameworks
import React, { useState } from "react";

//data
import { SnackSize } from "../../stateStore/constants/Enums";
import { MiniCookieCount, RegularCookieCount } from "../../data/CookieData";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { Observer } from "mobx-react";

interface ICookieCountProps {
    store?: GlobalStateStore;
}

const CookieCount = (props: ICookieCountProps) => {
    const [cookieSize, setCookieSize] = useState("");

    const renderCookieCount = () => {
        if (cookieSize === SnackSize.REGULAR) {
            return RegularCookieCount.map(
                ({ id, count, amountOfPeople, price }) => {
                    if (count === "") {
                        return (
                            <option key={`${count}${id}`} value="">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={count}
                            >{`${count} (${amountOfPeople}) ($${price})`}</option>
                        );
                    }
                }
            );
        } else {
            return MiniCookieCount.map(
                ({ id, count, amountOfPeople, price }) => {
                    if (count === "") {
                        return (
                            <option key={`${count}${id}`} value="">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={`${id}`}
                                value={count}
                            >{`${count} (${amountOfPeople}) ($${price})`}</option>
                        );
                    }
                }
            );
        }
    };
    return (
        <Observer>
            {() => {
                return (
                    <section className="cookie-count-container">
                        <h3>Choose Cookies</h3>
                        <hr />

                        {/* What kind of Cupcakes */}
                        <div className="cookie-kind-container">
                            <h5 className="cookie-title">
                                What Kind Of Cookies?
                            </h5>
                            <div className="cookie-choice-container">
                                <input
                                    value={SnackSize.REGULAR}
                                    type="radio"
                                    name="fruit"
                                    onChange={(e) =>
                                        setCookieSize(e.target.value)
                                    }
                                ></input>
                                <label htmlFor="fruit">Regular</label>
                                <input
                                    value={SnackSize.MINI}
                                    type="radio"
                                    name="fruit"
                                    onChange={(e) =>
                                        setCookieSize(e.target.value)
                                    }
                                ></input>
                                <label htmlFor="fruit">Mini</label>
                            </div>
                        </div>

                        {/* How many cupcakes */}
                        <div className="cookie-make-container">
                            <h5 className="cookie-title">
                                How Many
                                {cookieSize === SnackSize.REGULAR
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
            }}
        </Observer>
    );
};

export default CookieCount;

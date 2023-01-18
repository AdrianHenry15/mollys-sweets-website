// styles
import "../../styles/CookieBuild/CookieCount.scss";

//frameworks
import React, { useContext, useState } from "react";

//data
import { ProductSizes } from "../../stateStore/constants/Enums";
import { MiniCookieCount, RegularCookieCount } from "../../data/CookieData";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { inject, observer } from "mobx-react";

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

    setCookieSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cookieSize: e.target.value,
        });
    };

    renderCookieCount = () => {
        if (this.state.cookieSize === ProductSizes.REGULAR) {
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
                            value={ProductSizes.MINI}
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

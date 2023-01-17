// styles
import "../../styles/CupcakeBuild/CCCount.scss";

//frameworks
import React, { useState } from "react";

//data
import { SnackSize } from "../../constants/Enums";
import { MiniCupcakeCount, RegularCupcakeCount } from "../../data/CupcakesData";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { Observer } from "mobx-react";

interface ICCCountProps {
    store?: GlobalStateStore;
}

const CCCount = (props: ICCCountProps) => {
    const [cupcakeSize, setCupcakeSize] = useState("");

    const renderCupcakeCount = () => {
        if (cupcakeSize === SnackSize.REGULAR) {
            return RegularCupcakeCount.map(
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
            return MiniCupcakeCount.map(
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
                    <section className="ccc-count-container">
                        <h3>Choose Cupcakes</h3>
                        <hr />

                        {/* What kind of Cupcakes */}
                        <div className="ccc-kind-container">
                            <h5 className="ccc-title">
                                What Kind Of Cupcakes?
                            </h5>
                            <div className="ccc-choice-container">
                                <input
                                    value={SnackSize.REGULAR}
                                    type="radio"
                                    name="fruit"
                                    onChange={(e) =>
                                        setCupcakeSize(e.target.value)
                                    }
                                ></input>
                                <label htmlFor="fruit">Regular</label>
                                <input
                                    value={SnackSize.MINI}
                                    type="radio"
                                    name="fruit"
                                    onChange={(e) =>
                                        setCupcakeSize(e.target.value)
                                    }
                                ></input>
                                <label htmlFor="fruit">Mini</label>
                            </div>
                        </div>

                        {/* How many cupcakes */}
                        <div className="ccc-make-container">
                            <h5 className="ccc-title">
                                How Many
                                {cupcakeSize === SnackSize.REGULAR
                                    ? " Regular"
                                    : " Mini"}{" "}
                                Cupcakes
                            </h5>
                            <div className="ccc-choice-container">
                                <div className="ccc-option">
                                    <form action="">
                                        <select
                                            name="cake-size"
                                            className="ccc-dropdown"
                                        >
                                            {renderCupcakeCount()}
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="ccc-make-container">
                            <h5 className="ccc-title">Cost</h5>
                            <div>$0.00</div>
                        </div>
                    </section>
                );
            }}
        </Observer>
    );
};

export default CCCount;

// styles
import "../../styles/ChooseYourCupcake/CCCount.scss";

//frameworks
import React, { useState } from "react";

//data
import { CupcakeSize } from "../../store/Enums";
import { MiniCupcakeCount, RegularCupcakeCount } from "../../data/CupcakesData";

const CCCount = () => {
    const [cupcakeSize, setCupcakeSize] = useState("");

    const renderCupcakeCount = () => {
        if (cupcakeSize === CupcakeSize.REGULAR) {
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
        <section className="ccc-count-container">
            <h3>Choose Cupcakes</h3>
            <hr />

            {/* What kind of Cupcakes */}
            <div className="ccc-kind-container">
                <h5 className="ccc-title">What Kind Of Cupcakes?</h5>
                <div className="ccc-choice-container">
                    <input
                        value={CupcakeSize.REGULAR}
                        type="radio"
                        name="fruit"
                        onChange={(e) => setCupcakeSize(e.target.value)}
                    ></input>
                    <label htmlFor="fruit">Regular</label>
                    <input
                        value={CupcakeSize.MINI}
                        type="radio"
                        name="fruit"
                        onChange={(e) => setCupcakeSize(e.target.value)}
                    ></input>
                    <label htmlFor="fruit">Mini</label>
                </div>
            </div>

            {/* How many cupcakes */}
            <div className="ccc-make-container">
                <h5 className="ccc-title">
                    How Many
                    {cupcakeSize === CupcakeSize.REGULAR
                        ? " Regular"
                        : " Mini"}{" "}
                    Cupcakes
                </h5>
                <div className="ccc-choice-container">
                    <div className="ccc-option">
                        <form action="">
                            <select name="cake-size" className="ccc-dropdown">
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
};

export default CCCount;

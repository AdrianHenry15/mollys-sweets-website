// styles
import "../../styles/CupcakeBuild/CCCount.scss";

//frameworks
import React, { useState } from "react";

//data
import { ProductSizes } from "../../stateStore/constants/Enums";
import { MiniCupcakeCount, RegularCupcakeCount } from "../../data/CupcakesData";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { inject, observer } from "mobx-react";

interface ICCCountProps {
    store?: GlobalStateStore;
}

const CCCount: React.FC<ICCCountProps> = inject("store")(
    observer(({ store }: ICCCountProps) => {
        //variables
        const regCupcakeSizes =
            store!.ProductStore.products.sizes.cupcake_cookie_sizes.regular;
        const miniCupcakeSizes =
            store!.ProductStore.products.sizes.cupcake_cookie_sizes.mini;

        //state
        const [cupcakeSize, setCupcakeSize] = useState("");

        // functions
        const renderCupcakeCount = () => {
            if (cupcakeSize === ProductSizes.REGULAR) {
                return regCupcakeSizes.map(
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
                return miniCupcakeSizes.map(
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
            <section className="ccc-count-container">
                <h3>Choose Cupcakes</h3>
                <hr />

                {/* What kind of Cupcakes */}
                <div className="ccc-kind-container">
                    <h5 className="ccc-title">What Kind Of Cupcakes?</h5>
                    <div className="ccc-choice-container">
                        <input
                            value={ProductSizes.REGULAR}
                            type="radio"
                            name="fruit"
                            onChange={(e) => setCupcakeSize(e.target.value)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            value={ProductSizes.MINI}
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
                        {cupcakeSize === ProductSizes.REGULAR
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
                                    defaultValue=""
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
    })
);

export default CCCount;

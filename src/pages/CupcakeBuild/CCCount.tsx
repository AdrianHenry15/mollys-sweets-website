// styles
import "../../styles/CupcakeBuild/CCCount.scss";

//frameworks
import React from "react";

//store
import { ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Products";

interface ICCCountProps {
    store?: GlobalStateStore;
}

// interface ICCCountState {}

@inject("store")
@observer
class CCCount extends React.Component<ICCCountProps, {}> {
    // functions
    renderCupcakeCount = () => {
        //variables
        const regCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.regular;
        const miniCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.mini;
        const cupcakeSize = this.props.store!.CupcakeStore.cupcakeCount.size;
        if (cupcakeSize === ProductSizes.REGULAR) {
            return regCupcakeSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (id === 0) {
                        return (
                            <option key={`${id}`} value="0">
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
            return miniCupcakeSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (id === 0) {
                        return (
                            <option key={`${id}`} value="0">
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
            this.props.store!.CupcakeStore.cupcakeCosts.quantityCost;
        const cupcakeSize = this.props.store!.CupcakeStore.cupcakeCount.size;
        //store methods
        const setCupcakeSize =
            this.props.store!.CupcakeActions.cupcakeCountActions.setCupcakeSize;
        const handleCupcakeQuantity =
            this.props.store!.CupcakeActions.cupcakeCountActions
                .handleCupcakeQuantityCost;

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
                            onChange={(e) => setCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            value={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => setCupcakeSize(e)}
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
                                    onChange={(e) => handleCupcakeQuantity(e)}
                                    name="cake-size"
                                    className="ccc-dropdown"
                                    defaultValue={quantityCost}
                                >
                                    {this.renderCupcakeCount()}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ccc-make-container">
                    <h5 className="ccc-title">Cost</h5>
                    <div>{`$${quantityCost}`}</div>
                </div>
            </section>
        );
    }
}

export default CCCount;

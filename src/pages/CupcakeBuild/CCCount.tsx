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

interface ICCCountState {
    cupcakeSize: string;
}

@inject("store")
@observer
class CCCount extends React.Component<ICCCountProps, ICCCountState> {
    constructor(props: ICCCountProps) {
        super(props);

        this.state = {
            cupcakeSize: "",
        };
    }

    //state functions
    setCupcakeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;

        this.setState({
            cupcakeSize: value,
        });
    };

    // functions
    renderCupcakeCount = () => {
        //variables
        const regCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.regular;
        const miniCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.mini;
        if (this.state.cupcakeSize === ProductSizes.REGULAR) {
            return regCupcakeSizes.map(
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
            return miniCupcakeSizes.map(
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
    render() {
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
                            onChange={(e) => this.setCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            value={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.setCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Mini</label>
                    </div>
                </div>

                {/* How many cupcakes */}
                <div className="ccc-make-container">
                    <h5 className="ccc-title">
                        How Many
                        {this.state.cupcakeSize === ProductSizes.REGULAR
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
                                    {this.renderCupcakeCount()}
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
    }
}

export default CCCount;

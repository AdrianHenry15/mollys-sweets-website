// styles
import "../../styles/CupcakeBuildStyles/CCCount.scss";

//frameworks
import React from "react";

//store
import { ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface ICCCountProps {
    store?: GlobalStateStore;
}

// interface ICCCountState {}

@inject("store")
@observer
class CCCount extends React.Component<ICCCountProps, {}> {
    // functions
    getCupcakeQuantityInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            if (
                this.props.store!.CupcakeStore.cupcakeCount.size ===
                ProductSizes.MINI
            ) {
                //size
                this.props.store!.CupcakeStore.cupcakeCount.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productSize!;

                //serves
                this.props.store!.CupcakeStore.cupcakeCount.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productServes;

                //price
                this.props.store!.CupcakeStore.cupcakeCosts.quantityCost =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].price;

                // cart state
                this.props.store!.CartStore.cartEmpty = false;
            } else if (
                this.props.store!.CupcakeStore.cupcakeCount.size ===
                ProductSizes.REGULAR
            ) {
                //size
                this.props.store!.CupcakeStore.cupcakeCount.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productSize!;

                //serves
                this.props.store!.CupcakeStore.cupcakeCount.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productServes;

                //price
                this.props.store!.CupcakeStore.cupcakeCosts.quantityCost =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].price;

                // cart state
                this.props.store!.CartStore.cartEmpty = false;
            }
        }
    );
    getCupcakeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.CupcakeStore.cupcakeCount.size =
            value as ProductSizes;
    };
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
                            <option key={productQuantity} value="0">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={productQuantity}
                                value={id}
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
                            <option key={productQuantity} value="0">
                                Choose One
                            </option>
                        );
                    } else {
                        return (
                            <option
                                key={productQuantity}
                                value={id}
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
                            onChange={(e) => this.getCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            value={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCupcakeSize(e)}
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
                                    onChange={(e) =>
                                        this.getCupcakeQuantityInfo(e)
                                    }
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

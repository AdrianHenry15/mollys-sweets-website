// styles
import "./Base.scss";

//frameworks
import React from "react";

//store
import { ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface IBaseProps {
    store?: GlobalStateStore;
}

// interface ICCCountState {}

@inject("store")
@observer
class Base extends React.Component<IBaseProps, {}> {
    // functions
    private getCupcakeQuantityInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            if (
                this.props.store!.CupcakeStore.base.size === ProductSizes.MINI
            ) {
                //size
                this.props.store!.CupcakeStore.base.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productSize!;

                //serves
                this.props.store!.CupcakeStore.base.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productServes;
            } else if (
                this.props.store!.CupcakeStore.base.size ===
                ProductSizes.REGULAR
            ) {
                //size
                this.props.store!.CupcakeStore.base.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productSize!;

                //serves
                this.props.store!.CupcakeStore.base.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productServes;
            }
        }
    );
    private getCupcakeSize = action(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;
            this.props.store!.CupcakeStore.base.size = value as ProductSizes;
        }
    );
    private renderCupcakeCount = () => {
        //variables
        const regCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.regular;
        const miniCupcakeSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.mini;
        const cupcakeSize = this.props.store!.CupcakeStore.base.size;
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
        const cupcakeSize = this.props.store!.CupcakeStore.base.size;

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
                            <select
                                onChange={(e) => this.getCupcakeQuantityInfo(e)}
                                name="cake-size"
                                className="ccc-dropdown"
                                defaultValue={
                                    this.props.store!.CookieStore.base.quantity
                                }
                            >
                                {this.renderCupcakeCount()}
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Base;

// styles
import "./Base.scss";

// External Dependencies
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

interface IBaseState {
    cookieSize: string;
}

@inject("store")
@observer
class Base extends React.Component<IBaseProps, IBaseState> {
    constructor(props: IBaseProps) {
        super(props);

        this.state = {
            cookieSize: "",
        };
    }

    // functions
    private getCookieQuantity = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            if (this.props.store!.CookieStore.base.size === ProductSizes.MINI) {
                //size
                this.props.store!.CookieStore.base.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productSize!;

                //quantity
                this.props.store!.CookieStore.base.quantity =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productQuantity;

                //serves
                this.props.store!.CookieStore.base.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.mini[
                        value
                    ].productServes;

                // cart state
                this.props.store!.CartStore.cartEmpty = false;
            } else if (
                this.props.store!.CookieStore.base.size === ProductSizes.REGULAR
            ) {
                //size
                this.props.store!.CookieStore.base.size =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productSize!;

                //serves
                this.props.store!.CookieStore.base.serves =
                    ProductData.products.sizes.cupcake_cookie_sizes.regular[
                        value
                    ].productServes;

                // cart state
                this.props.store!.CartStore.cartEmpty = false;
            }
        }
    );
    private getCookieSize = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.CookieStore.base.size = value as ProductSizes;
        console.log(value);
    });
    private renderCookieCount = () => {
        //data variables
        const regCookieSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.regular;
        const miniCookiesSizes =
            ProductData.products.sizes.cupcake_cookie_sizes.mini;
        const cookieSize = this.props.store!.CookieStore.base.size;
        if (cookieSize === ProductSizes.REGULAR) {
            return regCookieSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (productQuantity === "") {
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
            return miniCookiesSizes.map(
                ({ id, productQuantity, productServes, price }) => {
                    if (productQuantity === "") {
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
        const cookieSize = this.props.store!.CookieStore.base.size;
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
                            onChange={(e) => this.getCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            defaultValue={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCookieSize(e)}
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
                                    defaultValue={
                                        this.props.store!.CookieStore.base
                                            .quantity
                                    }
                                    onChange={(e) => this.getCookieQuantity(e)}
                                    name="cake-size"
                                    className="cookie-dropdown"
                                >
                                    {this.renderCookieCount()}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Base;

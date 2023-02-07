// External Dependencies
import React from "react";
import { inject, observer } from "mobx-react";

//styles
import "../../styles/CookieBuildStyles/CookieFlavors.scss";

//stores
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ProductData } from "../../data/Products";

interface ICookieFlavorsProps {
    store?: GlobalStateStore;
}

interface ICookieFlavorsState {
    frosting: boolean;
}

@inject("store")
@observer
class CookieFlavors extends React.Component<
    ICookieFlavorsProps,
    ICookieFlavorsState
> {
    constructor(props: ICookieFlavorsProps) {
        super(props);

        this.state = {
            frosting: false,
        };
    }

    getCookieFlavorInfo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor
        this.props.store!.CookieStore.cookieFlavors.flavor =
            ProductData.products.cookies[value].productName;
        // price
        this.props.store!.CookieStore.cookieCosts.flavorsCost =
            ProductData.products.flavors[value].price;

        // //local storage
        // localStorage.getItem(
        //     this.CookieStore.cookieFlavors.flavor,
        //     this.CookieStore.cookieCosts.flavorsCost.toString()
        // );
    };
    getCookieFrostingInfo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // frosting
        this.props.store!.CookieStore.cookieFlavors.frosting =
            ProductData.products.frostings[value].productName;
        // price
        this.props.store!.CookieStore.cookieCosts.frostingsCost =
            ProductData.products.frostings[value].price;
    };

    getFrosting = () => {
        this.setState((state) => {
            return { frosting: !state.frosting };
        });
    };

    //main
    render() {
        //data variables
        const cookies = ProductData.products.cookies;
        const frostings = ProductData.products.frostings;

        //store variables
        const flavorCost =
            this.props.store!.CookieStore.cookieCosts.flavorsCost;
        const frostingCost =
            this.props.store!.CookieStore.cookieCosts.frostingsCost;

        // computeds
        const updateFlavorTotalCost =
            this.props.store!.ComputedCookieCosts.computedCosts
                .updateCookieFlavorTotalCost;

        return (
            <section className="cookie-f-container">
                <h3>Customize Flavors</h3>
                <hr />

                <div
                    id="cookie-f-custom-flavors"
                    className="cookie-f-make-container"
                >
                    <h5 className="flavors-title">Main Flavor</h5>
                    <div className="cookie-f-choice-container">
                        <div>
                            <form action="">
                                <select
                                    defaultValue={flavorCost}
                                    onChange={(e) =>
                                        this.getCookieFlavorInfo(e)
                                    }
                                    name="cake-size"
                                    className="cookie-f-dropdown"
                                >
                                    {cookies.map(
                                        ({ id, productName, price }) => {
                                            if (id === 0) {
                                                return (
                                                    <option
                                                        key={productName}
                                                        value="0"
                                                    >
                                                        Choose One
                                                    </option>
                                                );
                                            } else {
                                                return (
                                                    <option
                                                        key={productName}
                                                        value={id}
                                                    >{`${productName} ($${price})`}</option>
                                                );
                                            }
                                        }
                                    )}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cookie-f-make-container">
                    <h5 className="flavors-title">Would You Like Frosting?</h5>
                    <form action="">
                        <div className="ccc-choice-container">
                            <input
                                type="radio"
                                value="yes"
                                name="cookie-frosting"
                                onChange={() => this.getFrosting()}
                            />
                            <label htmlFor="cookie-frosting">Yes</label>
                            <input
                                type="radio"
                                value="no"
                                name="cookie-frosting"
                                onChange={() => this.getFrosting()}
                            />
                            <label htmlFor="cookie-frosting">No</label>
                        </div>
                    </form>
                </div>
                {this.state.frosting && (
                    <div
                        id="cookie-f-custom-flavors"
                        className="cookie-f-make-container"
                    >
                        <h5 className="flavors-title">Frosting</h5>
                        <div className="cookie-f-choice-container">
                            <div>
                                <form action="">
                                    <select
                                        defaultValue={frostingCost}
                                        onChange={(e) =>
                                            this.getCookieFrostingInfo(e)
                                        }
                                        name="cake-size"
                                        className="cookie-f-dropdown"
                                    >
                                        {frostings.map(
                                            ({ id, productName, price }) => {
                                                if (id === 0) {
                                                    return (
                                                        <option
                                                            key={productName}
                                                            value="0"
                                                        >
                                                            Choose One
                                                        </option>
                                                    );
                                                } else {
                                                    return (
                                                        <option
                                                            key={productName}
                                                            value={id}
                                                        >{`${productName} ($${price})`}</option>
                                                    );
                                                }
                                            }
                                        )}
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="cookie-f-make-container">
                    <h5 className="cookie-f-title">Cost</h5>
                    <div>{`$${updateFlavorTotalCost()}`}</div>
                </div>
            </section>
        );
    }
}

export default CookieFlavors;

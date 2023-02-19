// External Dependencies
import React from "react";
import { inject, observer } from "mobx-react";

//styles
import "./Flavors.scss";

//stores
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface ICookieFlavorsProps {
    store?: GlobalStateStore;
}

interface ICookieFlavorsState {
    frosting: string;
}

@inject("store")
@observer
class Flavors extends React.Component<
    ICookieFlavorsProps,
    ICookieFlavorsState
> {
    constructor(props: ICookieFlavorsProps) {
        super(props);

        this.state = {
            frosting: "",
        };
    }

    private getCookieFlavorInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            // flavor
            this.props.store!.CookieStore.flavors.flavor =
                ProductData.products.cookies[value].productName;

            // //local storage
            // localStorage.getItem(
            //     this.CookieStore.flavors.flavor,
            //     this.CookieStore.cookieCosts.flavorsCost.toString()
            // );
        }
    );
    private getCookieFrostingInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            // frosting
            this.props.store!.CookieStore.flavors.frosting =
                ProductData.products.frostings[value].productName;
        }
    );

    private getFrosting = (option: "yes" | "no") => {
        this.setState({
            frosting: option,
        });
    };

    //main
    render() {
        //data variables
        const cookies = ProductData.products.cookies;
        const frostings = ProductData.products.frostings;

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
                                    defaultValue={
                                        this.props.store!.CookieStore.flavors
                                            .flavor
                                    }
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
                                onChange={() => this.getFrosting("yes")}
                            />
                            <label htmlFor="cookie-frosting">Yes</label>
                            <input
                                type="radio"
                                value="no"
                                name="cookie-frosting"
                                onChange={() => this.getFrosting("no")}
                            />
                            <label htmlFor="cookie-frosting">No</label>
                        </div>
                    </form>
                </div>
                {this.state.frosting === "yes" && (
                    <div
                        id="cookie-f-custom-flavors"
                        className="cookie-f-make-container"
                    >
                        <h5 className="flavors-title">Frosting</h5>
                        <div className="cookie-f-choice-container">
                            <div>
                                <form action="">
                                    <select
                                        defaultValue={
                                            this.props.store!.CookieStore
                                                .flavors.frosting
                                        }
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
            </section>
        );
    }
}

export default Flavors;

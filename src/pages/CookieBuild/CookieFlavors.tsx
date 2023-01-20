//frameworks
import React from "react";

//styles
import "../../styles/CookieBuild/CookieFlavors.scss";

//stores
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
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
    setFrosting = () => {
        this.setState((state) => {
            return { frosting: !state.frosting };
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
                                    name="cake-size"
                                    className="cookie-f-dropdown"
                                >
                                    {cookies.map(
                                        ({ id, productName, price }) => {
                                            if (id === 0) {
                                                return (
                                                    <option
                                                        key={id}
                                                        defaultValue=""
                                                    >
                                                        Choose One
                                                    </option>
                                                );
                                            } else {
                                                return (
                                                    <option
                                                        key={id}
                                                        value={productName}
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
                                onChange={() => this.setFrosting()}
                            />
                            <label htmlFor="cookie-frosting">Yes</label>
                            <input
                                type="radio"
                                value="no"
                                name="cookie-frosting"
                                onChange={() => this.setFrosting()}
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
                                        name="cake-size"
                                        className="cookie-f-dropdown"
                                    >
                                        {frostings.map(
                                            ({ id, productName, price }) => {
                                                if (id === 0) {
                                                    return (
                                                        <option
                                                            key={id}
                                                            defaultValue=""
                                                        >
                                                            Choose One
                                                        </option>
                                                    );
                                                } else {
                                                    return (
                                                        <option
                                                            key={id}
                                                            value={productName}
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
                    <div>$0.00</div>
                </div>
            </section>
        );
    }
}

export default CookieFlavors;

//frameworks
import React from "react";

//styles
import "../../styles/CakeBuild/Flavors.scss";

//data
import { CakeTypes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Products";

//store

interface ICakeFlavorsProps {
    store?: GlobalStateStore;
}

interface ICakeFlavorsState {
    fruit: boolean;
}

@inject("store")
@observer
class CakeFlavors extends React.Component<
    ICakeFlavorsProps,
    ICakeFlavorsState
> {
    constructor(props: ICakeFlavorsProps) {
        super(props);

        this.state = {
            fruit: false,
        };
    }

    // functions
    renderCakeTypes = (genre: CakeTypes): JSX.Element => {
        const flavors = ProductData.products.flavors;
        const fillings = ProductData.products.fillings;
        const frostings = ProductData.products.frostings;
        switch (genre) {
            case CakeTypes.FLAVORS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {flavors.map(({ id, productName, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={id} defaultValue="">
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
                            })}
                        </select>
                    </form>
                );
            }
            case CakeTypes.FROSTINGS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {frostings.map(({ id, productName, price }) => {
                                if (id === 0) {
                                    return (
                                        <option
                                            key={productName + id}
                                            defaultValue=""
                                        >
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={productName + id}
                                            value={productName}
                                        >{`${productName} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            case CakeTypes.FILLINGS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {fillings.map(({ id, productName, price }) => {
                                if (id === 0) {
                                    return (
                                        <option
                                            key={productName + id}
                                            defaultValue=""
                                        >
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={productName + id}
                                            value={productName}
                                        >{`${productName} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            default: {
                return <div></div>;
            }
        }
    };

    setFruit = () => {
        this.setState((state) => {
            return { fruit: !state.fruit };
        });
    };
    // main render
    render() {
        // data variables
        const fruits = ProductData.products.fruit;
        return (
            <section className="flavors-custom-flavors-container">
                <h3>Customize Flavors</h3>
                <hr />
                {(Object.keys(CakeTypes) as Array<keyof typeof CakeTypes>).map(
                    (key) => {
                        // Flavor, Filling and Frosting
                        return (
                            <div
                                key={key}
                                id="flavors-custom-flavors"
                                className="flavors-cake-make-container"
                            >
                                <h5 className="flavors-title">
                                    Main{" "}
                                    {CakeTypes[key].toString().slice(0, -1)}
                                    {}
                                </h5>
                                <div className="flavors-choice-container">
                                    <div className="flavors-option">
                                        {this.renderCakeTypes(CakeTypes[key])}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}

                {/* Fresh Fruit */}
                <div
                    id="flavors-fruits-section-container"
                    className="flavors-cake-make-container"
                >
                    <h5 className="flavors-title">Add Fresh Fruit?</h5>
                    <div
                        id="flavors-fruit-section"
                        className="flavors-choice-container"
                    >
                        <input
                            value="yes"
                            type="radio"
                            name="fruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit()}
                        ></input>
                        <label htmlFor="fruit">Yes (Extra Cost*)</label>
                        <input
                            value="no"
                            type="radio"
                            name="fruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit()}
                        ></input>
                        <label htmlFor="fruit">No</label>
                    </div>
                </div>
                {this.state.fruit && (
                    <div
                        id="flavors-custom-flavors"
                        className="flavors-cake-make-container"
                    >
                        <h5 className="flavors-title">What Fruits?</h5>
                        <div className="flavors-choice-container">
                            <div className="flavors-option">
                                <form action="">
                                    <select
                                        name="cake-size"
                                        className="flavors-cake-size-dropdown"
                                    >
                                        {fruits.map(
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
                <div className="flavors-cake-make-container">
                    <h5 className="flavors-title">Flavors Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    }
}

export default CakeFlavors;

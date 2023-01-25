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

        // actions
        const handleCakeFlavorCost =
            this.props.store!.CakeActions.cakeCostActions.handleCakeFlavorCost;
        const handleCakeFrostingCost =
            this.props.store!.CakeActions.cakeCostActions
                .handleCakeFrostingCost;
        const handleCakeFillingCost =
            this.props.store!.CakeActions.cakeCostActions.handleCakeFillingCost;
        switch (genre) {
            case CakeTypes.FLAVORS: {
                return (
                    <form action="">
                        <select
                            onChange={(e) => handleCakeFlavorCost(e)}
                            defaultValue={
                                this.props.store!.CakeStore.cakeCosts
                                    .flavorsCost
                            }
                            name="cake-flavor"
                            className="flavors-cake-size-dropdown"
                        >
                            {flavors.map(({ id, productName, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={productName} value="0">
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
                            })}
                        </select>
                    </form>
                );
            }
            case CakeTypes.FROSTINGS: {
                return (
                    <form action="">
                        <select
                            onChange={(e) => handleCakeFrostingCost(e)}
                            defaultValue={
                                this.props.store!.CakeStore.cakeCosts
                                    .frostingsCost
                            }
                            name="cake-frosting"
                            className="flavors-cake-size-dropdown"
                        >
                            {frostings.map(({ id, productName, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={productName} value="0">
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
                            })}
                        </select>
                    </form>
                );
            }
            case CakeTypes.FILLINGS: {
                return (
                    <select
                        defaultValue={
                            this.props.store!.CakeStore.cakeCosts.fillingsCost
                        }
                        onChange={(e) => handleCakeFillingCost(e)}
                        name="cake-filling"
                        className="flavors-cake-size-dropdown"
                    >
                        {fillings.map(({ id, productName, price }) => {
                            if (id === 0) {
                                return (
                                    <option key={productName} value={id}>
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
                        })}
                    </select>
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

        //store varaibles
        const fruitCost = this.props.store!.CakeStore.cakeCosts.fruitCost;

        // store methods
        const updateFlavorsTotalCost =
            this.props.store!.ComputedCakeCosts.computedCosts
                .updateCakeFlavorsTotalCost;
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
                                        defaultValue={fruitCost}
                                        name="fruit"
                                        className="flavors-cake-size-dropdown"
                                    >
                                        {fruits.map(
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
                <div className="flavors-cake-make-container">
                    <h5 className="flavors-title">Flavors Cost</h5>
                    <div>{`$${updateFlavorsTotalCost()}`}</div>
                </div>
            </section>
        );
    }
}

export default CakeFlavors;

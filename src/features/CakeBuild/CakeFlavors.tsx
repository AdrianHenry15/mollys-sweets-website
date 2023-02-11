// External Dependencies
import React from "react";

//styles
import "../../styles/CakeBuildStyles/Flavors.scss";

//data
import { CakeTypes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

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

    getCakeFlavorInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor name
        this.props.store!.CakeStore.cakeFlavors.flavor =
            ProductData.products.flavors[value].productName;
        // price
        this.props.store!.CakeStore.cakeCosts.flavorsCost =
            ProductData.products.flavors[value].price;
    });
    getCakeFrostingInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor name
        this.props.store!.CakeStore.cakeFlavors.frosting =
            ProductData.products.frostings[value].productName;
        // price
        this.props.store!.CakeStore.cakeCosts.frostingsCost =
            ProductData.products.frostings[value].price;
    });
    getCakeFillingInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor name
        this.props.store!.CakeStore.cakeFlavors.filling =
            ProductData.products.fillings[value].productName;
        // price
        this.props.store!.CakeStore.cakeCosts.fillingsCost =
            ProductData.products.fillings[value].price;
    });
    getFruitInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor name
        this.props.store!.CakeStore.cakeFlavors.fruit =
            ProductData.products.fruit[value].productName;
        // price
        this.props.store!.CakeStore.cakeCosts.fruitCost =
            ProductData.products.fruit[value].price;
    });

    // functions
    renderCakeTypes = (genre: CakeTypes): JSX.Element => {
        const flavors = ProductData.products.flavors;
        const fillings = ProductData.products.fillings;
        const frostings = ProductData.products.frostings;

        switch (genre) {
            case CakeTypes.FLAVORS: {
                return (
                    <select
                        onChange={(e) => this.getCakeFlavorInfo(e)}
                        defaultValue={
                            this.props.store!.CakeStore.cakeCosts.flavorsCost
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
                );
            }
            case CakeTypes.FROSTINGS: {
                return (
                    <select
                        onChange={(e) => this.getCakeFrostingInfo(e)}
                        defaultValue={
                            this.props.store!.CakeStore.cakeCosts.frostingsCost
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
                );
            }
            case CakeTypes.FILLINGS: {
                return (
                    <select
                        defaultValue={
                            this.props.store!.CakeStore.cakeCosts.fillingsCost
                        }
                        onChange={(e) => this.getCakeFillingInfo(e)}
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
                            name="hasFruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit()}
                        ></input>
                        <label htmlFor="fruit">Yes (Extra Cost*)</label>
                        <input
                            value="no"
                            type="radio"
                            name="hasfruit"
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
                                <select
                                    onChange={(e) => this.getFruitInfo(e)}
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

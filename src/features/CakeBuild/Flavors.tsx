// External Dependencies
import React from "react";

//styles
import "./Flavors.scss";
import "../../GlobalStyles.scss";

//data
import { CakeTypes, ProductCategories } from "../../store/constants/Enums";
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
class Flavors extends React.Component<ICakeFlavorsProps, ICakeFlavorsState> {
    constructor(props: ICakeFlavorsProps) {
        super(props);

        this.state = {
            fruit: false,
        };
    }

    private getCakeFlavorInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            const flavorState = this.props.store!.CakeStore.flavors.flavor;
            const flavor = ProductData.products.flavors[value].productName;

            flavorState.includes("")
                ? flavorState.shift()
                : flavorState.push(flavor);
            console.log(flavorState);
            return;
        }
    );
    private getCakeFrostingInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            const frostingState = this.props.store!.CakeStore.flavors.frosting;
            const frosting = ProductData.products.frostings[value].productName;

            return frostingState.splice(0, 1, frosting);
        }
    );
    private getCakeFillingInfo = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            let select: HTMLSelectElement = e.target;
            let value: number = parseInt(select.value);
            const fillingState = this.props.store!.CakeStore.flavors.filling;
            const filling = ProductData.products.fillings[value].productName;

            return fillingState.splice(0, 1, filling);
        }
    );
    private getFruitInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        const fruitState = this.props.store!.CakeStore.flavors.frosting;
        const fruit = ProductData.products.frostings[value].productName;

        return fruitState.splice(0, 1, fruit);
    });

    // functions
    private renderCakeTypes = (genre: CakeTypes): JSX.Element => {
        const { flavors, fillings, frostings } = ProductData.products;

        switch (genre) {
            case CakeTypes.FLAVORS: {
                return (
                    <select
                        onChange={(e) => this.getCakeFlavorInfo(e)}
                        defaultValue={
                            this.props.store!.CakeStore.flavors.flavor
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
                            this.props.store!.CakeStore.flavors.frosting
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
                            this.props.store!.CakeStore.flavors.filling
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

    private setFruit = (hasFruit: boolean) => {
        this.setState({
            fruit: hasFruit,
        });
    };

    private catchError = (): string => {
        const { category } = this.props.store!.CategoryStore;
        const { flavor, frosting, filling } =
            this.props.store!.CakeStore.flavors;
        if (
            (category === ProductCategories.CAKES && flavor[0] === "") ||
            frosting[0] === "" ||
            filling[0] === ""
        ) {
            return "Please Finish Customizing Your Flavors";
        } else {
            return "";
        }
    };
    // main render
    render() {
        // data variables
        const fruits = ProductData.products.fruit;

        //store varaibles
        const fruit = this.props.store!.CakeStore.flavors.fruit;
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
                            onClick={() => this.setFruit(true)}
                        ></input>
                        <label htmlFor="fruit">Yes (Extra Cost*)</label>
                        <input
                            value="no"
                            type="radio"
                            name="hasFruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit(false)}
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
                                    defaultValue={fruit}
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
                <aside>
                    <i className="error-text">{this.catchError()}</i>
                </aside>
            </section>
        );
    }
}

export default Flavors;

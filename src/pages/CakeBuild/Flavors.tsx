//frameworks
import React, { useEffect } from "react";

//styles
import "../../styles/CakeBuild/Flavors.scss";

//data
import { Fillings, Frostings, MainFlavors } from "../../data/CakesData";
import { ProductTypes } from "../../stateStore/constants/Enums";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { Observer } from "mobx-react";

//store

interface IFlavorsProps {
    store?: GlobalStateStore;
}
const Flavors = (props: IFlavorsProps) => {
    const renderProductTypes = (genre: ProductTypes): JSX.Element => {
        switch (genre) {
            case ProductTypes.FLAVORS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {MainFlavors.map(({ id, name, price }) => {
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
                                            value={name}
                                        >{`${name} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            case ProductTypes.FROSTINGS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {Frostings.map(({ id, name, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={name + id} defaultValue="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={name + id}
                                            value={name}
                                        >{`${name} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            case ProductTypes.FILLINGS: {
                return (
                    <form action="">
                        <select
                            name="cake-size"
                            className="flavors-cake-size-dropdown"
                        >
                            {Fillings.map(({ id, name, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={name + id} defaultValue="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={name + id}
                                            value={name}
                                        >{`${name} ($${price})`}</option>
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
    return (
        <Observer>
            {() => {
                return (
                    <section className="flavors-custom-flavors-container">
                        <h3>Customize Flavors</h3>
                        <hr />
                        {(
                            Object.keys(ProductTypes) as Array<
                                keyof typeof ProductTypes
                            >
                        ).map((key) => {
                            // Flavor, Filling and Frosting
                            return (
                                <div
                                    key={key}
                                    id="flavors-custom-flavors"
                                    className="flavors-cake-make-container"
                                >
                                    <h5 className="flavors-title">
                                        Main{" "}
                                        {ProductTypes[key]
                                            .toString()
                                            .slice(0, -1)}
                                        {}
                                    </h5>
                                    <div className="flavors-choice-container">
                                        <div className="flavors-option">
                                            {renderProductTypes(
                                                ProductTypes[key]
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

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
                                ></input>
                                <label htmlFor="fruit">Yes (Extra Cost*)</label>
                                <input
                                    value="no"
                                    type="radio"
                                    name="fruit"
                                    id="flavors-fruit-input"
                                ></input>
                                <label htmlFor="fruit">No</label>
                            </div>
                        </div>
                        <div className="flavors-cake-make-container">
                            <h5 className="flavors-title">Flavors Cost</h5>
                            <div>$0.00</div>
                        </div>
                    </section>
                );
            }}
        </Observer>
    );
};

export default Flavors;

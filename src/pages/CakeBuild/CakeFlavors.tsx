//frameworks
import React, { useState } from "react";

//styles
import "../../styles/CakeBuild/Flavors.scss";

//data
import { CakeTypes } from "../../stateStore/constants/Enums";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { inject, observer } from "mobx-react";

//store

interface ICakeFlavorsProps {
    store?: GlobalStateStore;
}
const CakeFlavors: React.FC<ICakeFlavorsProps> = inject("store")(
    observer(({ store }: ICakeFlavorsProps) => {
        //state
        const [fruit, setFruit] = useState(false);

        // variables
        const flavors = store!.ProductStore.products.flavors;
        const fillings = store!.ProductStore.products.fillings;
        const frostings = store!.ProductStore.products.frostings;
        const fruits = store!.ProductStore.products.fruit;

        // functions
        const renderCakeTypes = (genre: CakeTypes): JSX.Element => {
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
        // main render
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
                                        {renderCakeTypes(CakeTypes[key])}
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
                            onClick={() => setFruit(true)}
                        ></input>
                        <label htmlFor="fruit">Yes (Extra Cost*)</label>
                        <input
                            value="no"
                            type="radio"
                            name="fruit"
                            id="flavors-fruit-input"
                            onClick={() => setFruit(false)}
                        ></input>
                        <label htmlFor="fruit">No</label>
                    </div>
                </div>
                {fruit && (
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
    })
);

export default CakeFlavors;

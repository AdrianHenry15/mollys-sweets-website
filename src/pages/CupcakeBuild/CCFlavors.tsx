//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuild/CCFlavors.scss";

//data
import { Frostings, MainFlavors } from "../../data/CakesData";
import { CakeTypes } from "../../stateStore/constants/Enums";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";

interface ICCFlavorsProps {
    store?: GlobalStateStore;
}

const CCFlavors: React.FC<ICCFlavorsProps> = inject("store")(
    observer(({ store }: ICCFlavorsProps) => {
        //variables
        const flavors = store!.ProductStore.products.flavors;
        const frostings = store!.ProductStore.products.frostings;
        //functions
        const renderCakeTypes = (genre: CakeTypes) => {
            if (genre === CakeTypes.FLAVORS) {
                return (
                    <form action="">
                        <select
                            defaultValue=""
                            name="cake-size"
                            className="ccf-dropdown"
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
            } else if (genre === CakeTypes.FROSTINGS) {
                return (
                    <form action="">
                        <select
                            defaultValue=""
                            name="cake-size"
                            className="ccf-dropdown"
                        >
                            {frostings.map(({ id, productName, price }) => {
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
        };
        return (
            <section className="ccf-container">
                <h3>Customize Flavors</h3>
                <hr />
                {(Object.keys(CakeTypes) as Array<keyof typeof CakeTypes>).map(
                    (key) => {
                        if (CakeTypes[key] === CakeTypes.FILLINGS) {
                            return <div></div>;
                        } else {
                            return (
                                <div
                                    key={key}
                                    id="ccf-custom-flavors"
                                    className="ccf-make-container"
                                >
                                    <h5 className="flavors-title">
                                        Main{" "}
                                        {CakeTypes[key].toString().slice(0, -1)}
                                        {}
                                    </h5>
                                    <div className="ccf-choice-container">
                                        <div>
                                            {renderCakeTypes(CakeTypes[key])}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                )}
                <div className="ccf-make-container">
                    <h5 className="ccf-title">Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    })
);

export default CCFlavors;

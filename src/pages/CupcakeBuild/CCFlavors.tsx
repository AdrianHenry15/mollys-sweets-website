//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuild/CCFlavors.scss";

//data
import { Frostings } from "../../data/CakesData";
import { ProductTypes } from "../../stateStore/constants/Enums";
import { Observer } from "mobx-react";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";

interface ICCFlavors {
    store?: GlobalStateStore;
}

const CCFlavors = (props: ICCFlavors) => {
    const flavors = props.store!.ProductStore.products.flavors;
    const renderSweetGenres = (genre: ProductTypes): JSX.Element => {
        switch (genre) {
            case ProductTypes.FLAVOR: {
                return (
                    <form action="">
                        <select
                            defaultValue=""
                            name="cake-size"
                            className="ccf-dropdown"
                        >
                            {flavors.map(
                                ({ id, product, productName, price }) => {
                                    if (id === 0) {
                                        return (
                                            <option key={id} defaultValue="">
                                                Choose One
                                            </option>
                                        );
                                    } else if (
                                        product === ProductTypes.FLAVOR
                                    ) {
                                        return (
                                            <option
                                                key={id}
                                                value={productName}
                                            >{`${productName} ($${price})`}</option>
                                        );
                                    } else {
                                        return <div></div>;
                                    }
                                }
                            )}
                        </select>
                    </form>
                );
            }
            case ProductTypes.FROSTING: {
                return (
                    <form action="">
                        <select
                            defaultValue=""
                            name="cake-size"
                            className="ccf-dropdown"
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
            default: {
                return <div></div>;
            }
        }
    };
    return (
        <Observer>
            {() => {
                return (
                    <section className="ccf-container">
                        <h3>Customize Flavors</h3>
                        <hr />
                        {(
                            Object.keys(ProductTypes) as Array<
                                keyof typeof ProductTypes
                            >
                        ).map((key) => {
                            return (
                                <div
                                    key={key}
                                    id="ccf-custom-flavors"
                                    className="ccf-make-container"
                                >
                                    <h5 className="flavors-title">
                                        Main{" "}
                                        {ProductTypes[key]
                                            .toString()
                                            .slice(0, -1)}
                                        {}
                                    </h5>
                                    <div className="ccf-choice-container">
                                        <div>
                                            {renderSweetGenres(
                                                ProductTypes[key]
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="ccf-make-container">
                            <h5 className="ccf-title">Cost</h5>
                            <div>$0.00</div>
                        </div>
                    </section>
                );
            }}
        </Observer>
    );
};

export default CCFlavors;

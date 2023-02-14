//frameworks
import React from "react";

//styles
import "./Flavors.scss";

//stores
import { CakeTypes, ProductSizes } from "../../store/constants/Enums";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ProductData } from "../../data/Data";

interface ICCFlavorsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Flavors extends React.Component<ICCFlavorsProps, {}> {
    //functions

    private getCupcakeFlavorInfo = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // flavor
        this.props.store!.CupcakeStore.flavors.flavor =
            ProductData.products.flavors[value].productName;
    };
    private getCupcakeFrostingInfo = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        // frosting
        this.props.store!.CupcakeStore.flavors.frosting =
            ProductData.products.frostings[value].productName;
    };
    private getCupcakeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.CupcakeStore.base.size = value as ProductSizes;
    };

    private renderCakeTypes = (genre: CakeTypes) => {
        //variables
        const flavors = ProductData.products.flavors;
        const frostings = ProductData.products.frostings;

        if (genre === CakeTypes.FLAVORS) {
            return (
                <select
                    onChange={(e) => this.getCupcakeFlavorInfo(e)}
                    defaultValue={this.props.store!.CupcakeStore.flavors.flavor}
                    name="cake-size"
                    className="ccf-dropdown"
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
        } else if (genre === CakeTypes.FROSTINGS) {
            return (
                <select
                    onChange={(e) => this.getCupcakeFrostingInfo(e)}
                    value={this.props.store!.CupcakeStore.flavors.frosting}
                    name="cake-size"
                    className="ccf-dropdown"
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
    };
    render() {
        return (
            <section className="ccf-container">
                <h3>Customize Flavors</h3>
                <hr />
                {(Object.keys(CakeTypes) as Array<keyof typeof CakeTypes>).map(
                    (key) => {
                        if (CakeTypes[key] === CakeTypes.FILLINGS) {
                            return <div key={key}></div>;
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
                                            {this.renderCakeTypes(
                                                CakeTypes[key]
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                )}
            </section>
        );
    }
}

export default Flavors;
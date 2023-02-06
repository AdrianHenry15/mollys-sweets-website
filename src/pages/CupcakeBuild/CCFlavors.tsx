//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuildStyles/CCFlavors.scss";

//stores
import { CakeTypes } from "../../store/constants/Enums";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ProductData } from "../../data/Products";

interface ICCFlavorsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CCFlavors extends React.Component<ICCFlavorsProps, {}> {
    //functions
    renderCakeTypes = (genre: CakeTypes) => {
        //variables
        const flavors = ProductData.products.flavors;
        const frostings = ProductData.products.frostings;

        // store variables
        const flavorCost =
            this.props.store!.CupcakeStore.cupcakeCosts.flavorsCost;
        const frostingCost =
            this.props.store!.CupcakeStore.cupcakeCosts.frostingsCost;

        // store methods
        const handleFlavorCost =
            this.props.store!.CupcakeActions.cupcakeCountActions
                .handleCupcakeFlavorCost;
        const handleFrostingCost =
            this.props.store!.CupcakeActions.cupcakeCountActions
                .handleCupcakeFrostingCost;

        if (genre === CakeTypes.FLAVORS) {
            return (
                <form action="">
                    <select
                        onChange={(e) => handleFlavorCost(e)}
                        defaultValue={flavorCost}
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
                </form>
            );
        } else if (genre === CakeTypes.FROSTINGS) {
            return (
                <form action="">
                    <select
                        onChange={(e) => handleFrostingCost(e)}
                        value={frostingCost}
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
                </form>
            );
        }
    };
    render() {
        //store methods
        const updateCupcakeTotalFlavorCost =
            this.props.store!.ComputedCupcakeCosts.computedCosts
                .updateCupcakeFlavorTotalCost;
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
                <div className="ccf-make-container">
                    <h5 className="ccf-title">Cost</h5>
                    <div>{`$${updateCupcakeTotalFlavorCost()}`}</div>
                </div>
            </section>
        );
    }
}

export default CCFlavors;
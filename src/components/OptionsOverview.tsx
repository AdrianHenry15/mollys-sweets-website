//styles
import "./OptionsOverview.scss";

// External Dependencies
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//data
import {
    CakeFillingsList,
    CakeFlavorsList,
    CakeFrostingsList,
    ProductData,
} from "../data/Data";

interface IOptionsOverviewProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class OptionsOverview extends React.Component<IOptionsOverviewProps, {}> {
    render() {
        // data variables
        const sheetSizes = ProductData.products.sizes.sheetSizes;
        const roundSizes = ProductData.products.sizes.roundSizes;
        //main
        return (
            <aside className="cake-options-container">
                <h4 className="cake-options-label">Options Overview</h4>
                <div className="options-container">
                    <h5 className="cake-options-title">Sizes</h5>
                    <table>
                        <tbody>
                            <tr>
                                <th>Sheet Size:</th>
                                <th>Serves:</th>
                            </tr>
                            {sheetSizes.map(
                                ({ productSize, productServes, price }) => {
                                    return (
                                        <tr key={`${productSize}${price}`}>
                                            <td>{productSize}</td>
                                            <td>{productServes}</td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <th>Round Size:</th>
                                <th>Serves:</th>
                            </tr>
                            {roundSizes.map(
                                ({ productSize, productServes, price }) => {
                                    return (
                                        <tr key={`${productSize}${price}`}>
                                            <td>{productSize}</td>
                                            <td>{productServes}</td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                    <section className="flavors-list-container">
                        <h5 className="list-title">Flavors</h5>

                        <div className="flavors-name-container">
                            {CakeFlavorsList.map(({ label }) => {
                                return (
                                    <div
                                        className="flavors-list"
                                        key={`${label}`}
                                    >
                                        <span>{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section className="flavors-list-container">
                        <h5 className="list-title">Frostings</h5>

                        <div className="flavors-name-container">
                            {CakeFrostingsList.map(({ label }) => {
                                return (
                                    <div
                                        className="flavors-list"
                                        key={`${label}`}
                                    >
                                        <span>{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section className="flavors-list-container">
                        <h5 className="list-title">Fillings</h5>

                        <div className="flavors-name-container">
                            {CakeFillingsList.map(({ label }) => {
                                return (
                                    <div
                                        className="flavors-list"
                                        key={`${label}`}
                                    >
                                        <span>{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </aside>
        );
    }
}

export default OptionsOverview;

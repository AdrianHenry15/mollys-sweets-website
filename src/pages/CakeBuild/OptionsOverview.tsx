//styles
import "../../styles/CakeBuild/OptionsOverview.scss";

//frameworks
import React from "react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//data
import { ProductData } from "../../data/Products";

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
                <h4 className="cake-options-label">Cake Options Overview</h4>
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
                </div>
            </aside>
        );
    }
}

export default OptionsOverview;

import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import "../../styles/CakeBuild/TotalCost.scss";

interface ICakeTotalCostProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CakeTotalCost extends React.Component<ICakeTotalCostProps, {}> {
    // store variables

    render() {
        //cakebase cost
        const tierCost = this.props.store!.ProductStore.cake.tierCost;
        const sizeCost = this.props.store!.ProductStore.cake.sizeCost;
        const cakeBaseTotal = sizeCost + tierCost;
        //flavors cost
        const flavorsCost = this.props.store!.ProductStore.cake.flavorsCost;
        const fillingsCost = this.props.store!.ProductStore.cake.fillingsCost;
        const frostingsCost = this.props.store!.ProductStore.cake.frostingsCost;
        const flavorsTotal = flavorsCost + frostingsCost + fillingsCost;

        return (
            <section className="total-cake-cost-container">
                <h3>Total Cake Cost</h3>
                <aside>
                    <p>
                        Actual costs may vary upon further discussion. All
                        prices are subject to change without further notice.
                    </p>
                </aside>
                <hr />
                <section className="total-costs-container">
                    <div
                        id="total-base-costs-container"
                        className="total-costs"
                    >
                        <h4>Cake Base</h4>
                        <span>{`$${cakeBaseTotal}`}</span>
                    </div>
                    <div
                        id="total-flavors-costs-container"
                        className="total-costs"
                    >
                        <h4>Flavors, Fillings, etc.</h4>
                        <span>{`$${flavorsTotal}`}</span>
                    </div>
                    <div
                        id="total-design-costs-container"
                        className="total-costs"
                    >
                        <h4>Design</h4>
                        <span>TBD</span>
                    </div>
                    <div id="total-costs-container" className="total-costs">
                        <h4>Total</h4>
                        <span>{`$${cakeBaseTotal + flavorsTotal}`}</span>
                    </div>
                </section>
                <hr />
            </section>
        );
    }
}
export default CakeTotalCost;

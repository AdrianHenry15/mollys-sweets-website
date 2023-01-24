//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuild/CCTotalCost.scss";

//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

interface ICCTotalCostProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CCTotalCost extends React.Component<ICCTotalCostProps, {}> {
    render() {
        //store variables
        const quantityCost =
            this.props.store!.CupcakeStore.cupcakeCosts.quantityCost;

        //store methods
        const updateTotalFlavorsCost =
            this.props.store!.ComputedCupcakeCosts.computedCosts
                .updateCupcakeFlavorTotalCost;
        const updateTotalCupcakeCost =
            this.props.store!.ComputedCupcakeCosts.computedCosts
                .updateTotalCupcakeCost;
        return (
            <section className="cctc-container">
                <h3>Total Cupcake Cost</h3>
                <aside>
                    <p>
                        Actual costs may vary upon further discussion. All
                        prices are subject to change without further notice.
                    </p>
                </aside>
                <hr />
                <section className="cctc-wrapper">
                    <div className="cctc">
                        <h4>Cupcake Count</h4>
                        <span>{`$${quantityCost}`}</span>
                    </div>
                    <div className="cctc">
                        <h4>Flavors, Fillings, etc.</h4>
                        <span>{`$${updateTotalFlavorsCost()}`}</span>
                    </div>
                    <div className="cctc">
                        <h4>Design</h4>
                        <span>TBD</span>
                    </div>
                    <div className="cctc">
                        <h4>Total</h4>
                        <span>{`$${updateTotalCupcakeCost()}`}</span>
                    </div>
                </section>
                <hr />
            </section>
        );
    }
}

export default CCTotalCost;

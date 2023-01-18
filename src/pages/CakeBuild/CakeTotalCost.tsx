import { observer, Observer, useObserver } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import "../../styles/CakeBuild/TotalCost.scss";

interface ICakeTotalCostProps {
    store?: GlobalStateStore;
}

const CakeTotalCost = observer((props: ICakeTotalCostProps) => {
    return (
        <section className="total-cake-cost-container">
            <h3>Total Cake Cost</h3>
            <aside>
                <p>
                    Actual costs may vary upon further discussion. All prices
                    are subject to change without further notice.
                </p>
            </aside>
            <hr />
            <section className="total-costs-container">
                <div id="total-base-costs-container" className="total-costs">
                    <h4>Cake Base</h4>
                    <span>$0.00</span>
                </div>
                <div id="total-flavors-costs-container" className="total-costs">
                    <h4>Flavors, Fillings, etc.</h4>
                    <span>$0.00</span>
                </div>
                <div id="total-design-costs-container" className="total-costs">
                    <h4>Design</h4>
                    <span>$0.00</span>
                </div>
                <div id="total-costs-container" className="total-costs">
                    <h4>Total</h4>
                    <span>$0.00</span>
                </div>
            </section>
            <hr />
        </section>
    );
});
export default CakeTotalCost;

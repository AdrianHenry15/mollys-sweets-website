import React from "react";

const TotalCost = () => {
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
            <section className="costs-container">
                <div id="base-costs-container" className="costs">
                    <h4>Cake Base</h4>
                    <span>$0.00</span>
                </div>
                <div id="flavors-costs-container" className="costs">
                    <h4>Flavors, Fillings, etc.</h4>
                    <span>$0.00</span>
                </div>
                <div id="design-costs-container" className="costs">
                    <h4>Design</h4>
                    <span>$0.00</span>
                </div>
                <div id="total-costs-container" className="costs">
                    <h4>Total</h4>
                    <span>$0.00</span>
                </div>
            </section>
            <hr />
        </section>
    );
};

export default TotalCost;

import React from "react";
import "../../styles/CookieBuild/CookieTotalCost.scss";

const CookieTotalCost = () => {
    return (
        <section className="cookie-tc-container">
            <h3>Total Cookie Cost</h3>
            <aside>
                <p>
                    Actual costs may vary upon further discussion. All prices
                    are subject to change without further notice.
                </p>
            </aside>
            <hr />
            <section className="cookie-tc-wrapper">
                <div className="cookie-tc">
                    <h4>Cookie Count</h4>
                    <span>$0.00</span>
                </div>
                <div className="cookie-tc">
                    <h4>Flavors, Fillings, etc.</h4>
                    <span>$0.00</span>
                </div>
                <div className="cookie-tc">
                    <h4>Design</h4>
                    <span>$0.00</span>
                </div>
                <div className="cookie-tc">
                    <h4>Total</h4>
                    <span>$0.00</span>
                </div>
            </section>
            <hr />
        </section>
    );
};

export default CookieTotalCost;

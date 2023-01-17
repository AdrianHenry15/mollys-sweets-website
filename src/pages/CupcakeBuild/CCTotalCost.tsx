import { Observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import "../../styles/CupcakeBuild/CCTotalCost.scss";

interface ICCTotalCostProps {
    store?: GlobalStateStore;
}

const CCTotalCost = (props: ICCTotalCostProps) => {
    return (
        <Observer>
            {() => {
                return (
                    <section className="cctc-container">
                        <h3>Total Cupcake Cost</h3>
                        <aside>
                            <p>
                                Actual costs may vary upon further discussion.
                                All prices are subject to change without further
                                notice.
                            </p>
                        </aside>
                        <hr />
                        <section className="cctc-wrapper">
                            <div className="cctc">
                                <h4>Cupcake Count</h4>
                                <span>$0.00</span>
                            </div>
                            <div className="cctc">
                                <h4>Flavors, Fillings, etc.</h4>
                                <span>$0.00</span>
                            </div>
                            <div className="cctc">
                                <h4>Design</h4>
                                <span>$0.00</span>
                            </div>
                            <div className="cctc">
                                <h4>Total</h4>
                                <span>$0.00</span>
                            </div>
                        </section>
                        <hr />
                    </section>
                );
            }}
        </Observer>
    );
};

export default CCTotalCost;

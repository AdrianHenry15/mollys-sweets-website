//styles
import "../../styles/CakeBuild/BuildYourCake.scss";
//frameworks
import React from "react";
//components
import CakeBase from "./Base";
import Flavors from "./Flavors";
import OptionsOverview from "./OptionsOverview";
import CakeDetails from "./Details";
import TotalCost from "./TotalCost";

const BuildYourCake = () => {
    return (
        <section className="main-build-cake-wrapper">
            <div className="main-build-cake-container">
                <OptionsOverview />
                <section className="main-customize-cake-container">
                    <aside className="main-note">
                        <p>
                            <strong>NOTE: </strong>
                            <i>
                                The form below is only to request a custom cake
                                quote. Final cake order details will still need
                                further discussion. All prices are subject to
                                change without further notice.
                            </i>
                        </p>
                    </aside>
                    <section className="main-create-cake-container">
                        <CakeBase />
                    </section>
                    <section className="main-create-cake-container">
                        <Flavors />
                    </section>
                    <section className="main-create-cake-container">
                        <CakeDetails />
                    </section>
                    <section className="main-create-cake-container">
                        <TotalCost />
                    </section>
                </section>
            </div>
        </section>
    );
};

export default BuildYourCake;

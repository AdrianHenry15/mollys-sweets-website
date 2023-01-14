import "../../styles/BuildYourCake/BuildYourCake.scss";
import React from "react";
import CCCount from "./CCCount";
import CCFlavors from "./CCFlavors";
import CCDetails from "./CCDetails";
import CCTotalCost from "./CCTotalCost";

const ChooseYourCupcakes = () => {
    return (
        <section className="main-build-cake-wrapper">
            <div className="main-build-cake-container">
                {/* <OptionsOverview /> */}
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
                        <CCCount />
                    </section>
                    <section className="main-create-cake-container">
                        <CCFlavors />
                    </section>
                    <section className="main-create-cake-container">
                        <CCDetails />
                    </section>
                    <section className="main-create-cake-container">
                        <CCTotalCost />
                    </section>
                </section>
            </div>
        </section>
    );
};

export default ChooseYourCupcakes;

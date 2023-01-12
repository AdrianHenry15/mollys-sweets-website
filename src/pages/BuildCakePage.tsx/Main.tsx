import "../../styles/BuildYourCake.scss";
import React from "react";
import CakeBase from "./Base";
import Flavors from "./Flavors";
import OptionsOverview from "./OptionsOverview";
import CakeDetails from "./Details";
import ComingSoon from "../../components/ComingSoon";

const BuildYourCake = () => {
    return (
        <section className="build-cake-wrapper">
            <div>
                <ComingSoon />
            </div>
            {/* <div className="build-cake-container">
                <OptionsOverview />
                <section className="customize-cake-container">
                    <aside className="note">
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
                    <section className="create-cake-container">
                        <CakeBase />
                    </section>
                    <section className="create-cake-container">
                        <Flavors />
                    </section>
                    <section className="create-cake-container">
                        <CakeDetails />
                    </section>
                </section>
            </div> */}
        </section>
    );
};

export default BuildYourCake;

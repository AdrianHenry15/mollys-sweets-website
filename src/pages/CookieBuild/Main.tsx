import "../../styles/CookieBuild/CookieBuild.scss";
import React from "react";

// components
import CookieCount from "./CookieCount";
import CookieTotalCost from "./CookieTotalCost";
import CookieDetails from "./CookieDetails";
import CookieFlavors from "./CookieFlavors";

const ChooseYourCookies = () => {
    return (
        <section className="main-build-cake-wrapper">
            <div className="main-build-cake-container">
                {/* <OptionsOverview /> */}
                <section className="main-customize-cake-container">
                    <aside className="main-note">
                        <p>
                            <strong>NOTE: </strong>
                            <i>
                                The form below is only to request a custom
                                cookies quote. Final cookie order details will
                                still need further discussion. All prices are
                                subject to change without further notice.
                            </i>
                        </p>
                    </aside>
                    <section className="main-create-cake-container">
                        <CookieCount />
                    </section>
                    <section className="main-create-cake-container">
                        <CookieFlavors />
                    </section>
                    <section className="main-create-cake-container">
                        <CookieDetails />
                    </section>
                    <section className="main-create-cake-container">
                        <CookieTotalCost />
                    </section>
                </section>
            </div>
        </section>
    );
};

export default ChooseYourCookies;

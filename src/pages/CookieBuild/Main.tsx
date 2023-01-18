import "../../styles/CookieBuild/Main.scss";
import React from "react";

// components
import CookieCount from "./CookieCount";
import CookieTotalCost from "./CookieTotalCost";
import CookieDetails from "./CookieDetails";
import CookieFlavors from "./CookieFlavors";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { observer } from "mobx-react-lite";

interface IChooseYourCookies {
    store?: GlobalStateStore;
}

const ChooseYourCookies = () => {
    return (
        <section className="main-build-cookie-wrapper">
            <div className="main-build-cookie-container">
                {/* <OptionsOverview /> */}
                <section className="main-customize-cookie-container">
                    <aside className="main-cookie-note">
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
                    <section className="main-create-cookie-container">
                        <CookieCount />
                    </section>
                    <section className="main-create-cookie-container">
                        <CookieFlavors />
                    </section>
                    <section className="main-create-cookie-container">
                        <CookieDetails />
                    </section>
                    <section className="main-create-cookie-container">
                        <CookieTotalCost />
                    </section>
                </section>
            </div>
        </section>
    );
};

export default ChooseYourCookies;

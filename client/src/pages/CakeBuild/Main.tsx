//styles
import "../../styles/CakeBuildStyles/Main.scss";
//frameworks
import React from "react";
//components
import CakeBase from "./CakeBase";
import Flavors from "./CakeFlavors";
import OptionsOverview from "./OptionsOverview";
import CakeDetails from "./CakeDetails";
import TotalCost from "./CakeTotalCost";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { Link } from "react-router-dom";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";

interface IBuildYourCakeProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class BuildYourCake extends React.Component<IBuildYourCakeProps, {}> {
    render() {
        return (
            <section className="main-build-cake-wrapper">
                <div className="main-build-cake-container">
                    <OptionsOverview />
                    <section className="main-customize-cake-container">
                        <aside className="main-note">
                            <p>
                                <strong>NOTE: </strong>
                                <i>
                                    The form below is only to request a custom
                                    cake quote. Final cake order details will
                                    still need further discussion. All prices
                                    are subject to change without further
                                    notice.
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
                <nav className="byc-create-links-container">
                    <Link
                        className="byc-create-links byc-cupcakes-link"
                        to="/choose-your-cupcakes"
                    >
                        <CupcakeIcon className="byc-create-icons" />
                        <span className="byc-create-icons-label">
                            Create Cupcakes
                        </span>
                        <CupcakeIcon className="byc-create-icons" />
                    </Link>
                    <Link
                        className="byc-create-links byc-cookies-link"
                        to="/choose-your-cookies"
                    >
                        <CookieIcon className="byc-create-icons" />
                        <span className="byc-create-icons-label">
                            Create Cookies
                        </span>
                        <CookieIcon className="byc-create-icons" />
                    </Link>
                </nav>
            </section>
        );
    }
}

export default BuildYourCake;

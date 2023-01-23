//styles
import "../../styles/CupcakeBuild/Main.scss";
//frameworks
import React from "react";
import { Link } from "react-router-dom";
// components
import CCCount from "./CCCount";
import CCFlavors from "./CCFlavors";
import CCDetails from "./CCDetails";
import CCTotalCost from "./CCTotalCost";

//store
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RxCookie as CookieIcon } from "react-icons/rx";

interface IChooseYourCupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCupcakes extends React.Component<IChooseYourCupcakesProps, {}> {
    render() {
        return (
            <section className="main-build-cupcake-wrapper">
                <div className="main-build-cupcake-container">
                    {/* <OptionsOverview /> */}
                    <section className="main-customize-cupcake-container">
                        <aside className="main-cc-note">
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
                        <section className="main-create-cupcake-container">
                            <CCCount />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCFlavors />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCDetails />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCTotalCost />
                        </section>
                    </section>
                </div>
                <nav className="cc-create-links-container">
                    <Link
                        className="cc-create-links c-cake-link"
                        to="/build-your-cake"
                    >
                        <CakeIcon className="cc-create-icons" />
                        <span className="cc-create-icons-label">
                            Create Cakes
                        </span>
                        <CakeIcon className="cc-create-icons" />
                    </Link>
                    <Link
                        className="cc-create-links c-cupcake-link"
                        to="/choose-your-cookies"
                    >
                        <CookieIcon className="cc-create-icons" />
                        <span className="cc-create-icons-label">
                            Create Cookies
                        </span>
                        <CookieIcon className="cc-create-icons" />
                    </Link>
                </nav>
            </section>
        );
    }
}

export default ChooseYourCupcakes;

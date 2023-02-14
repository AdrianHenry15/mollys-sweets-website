//styles
import "./Main.scss";

// External Dependencies
import React from "react";
import { Link } from "react-router-dom";

// components
import Base from "./Base";
import CookieDetails from "./Details";
import Flavors from "./Flavors";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { ProductCategories } from "../../store/constants/Enums";

interface IChooseYourChooseYourCookiesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCookies extends React.Component<
    IChooseYourChooseYourCookiesProps,
    {}
> {
    render() {
        //store actions
        const onLinkClick = this.props.store!.CategoryActions.getCategory;
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
                                    cookies quote. Final cookie order details
                                    will still need further discussion. All
                                    prices are subject to change without further
                                    notice.
                                </i>
                            </p>
                        </aside>
                        <section className="main-create-cookie-container">
                            <Base />
                        </section>
                        <section className="main-create-cookie-container">
                            <Flavors />
                        </section>
                        <section className="main-create-cookie-container">
                            <CookieDetails />
                        </section>
                    </section>
                </div>
                <nav className="c-create-links-container">
                    <Link
                        onClick={() => onLinkClick(ProductCategories.CAKES)}
                        className="c-create-links c-cake-link"
                        to="/build-your-cake"
                    >
                        <CakeIcon className="c-create-icons" />
                        <span className="c-create-icons-label">
                            Create Cakes
                        </span>
                        <CakeIcon className="c-create-icons" />
                    </Link>
                    <Link
                        onClick={() => onLinkClick(ProductCategories.CUPCAKES)}
                        className="c-create-links c-cupcake-link"
                        to="/choose-your-cupcakes"
                    >
                        <CupcakeIcon className="c-create-icons" />
                        <span className="c-create-icons-label">
                            Create Cupcakes
                        </span>
                        <CupcakeIcon className="c-create-icons" />
                    </Link>
                </nav>
            </section>
        );
    }
}

export default ChooseYourCookies;

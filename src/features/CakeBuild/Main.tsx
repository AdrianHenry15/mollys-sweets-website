//styles
import "./Main.scss";
// External Dependencies
import React from "react";
//components
import Base from "./Base";
import Flavors from "./Flavors";
import OptionsOverview from "./OptionsOverview";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { Link } from "react-router-dom";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";
import CustomerInfo from "../../components/CustomerInfo";
import SubmitBtn from "../../components/SubmitOrderBtn";
import Details from "../../components/Details";

interface IBuildYourCakeProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class BuildYourCake extends React.Component<IBuildYourCakeProps, {}> {
    render() {
        //store actions
        const getCategory = this.props.store!.CategoryStore.getCategory;
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
                                    are subject to change without further notice
                                    and will be presented in an email after your
                                    order is submitted.
                                </i>
                            </p>
                        </aside>

                        <section className="main-create-cake-container">
                            <CustomerInfo />
                        </section>
                        <section className="main-create-cake-container">
                            <Base />
                        </section>
                        <section className="main-create-cake-container">
                            <Flavors />
                        </section>
                        <section className="main-create-cake-container">
                            <Details category={ProductCategories.CAKES} />
                        </section>
                    </section>
                    <SubmitBtn />
                </div>
                <nav className="byc-create-links-container">
                    <Link
                        onClick={() => getCategory(ProductCategories.CUPCAKES)}
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
                        onClick={() => getCategory(ProductCategories.COOKIES)}
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

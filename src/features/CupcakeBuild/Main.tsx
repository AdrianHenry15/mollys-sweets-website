//styles
import "./Main.scss";
//frameworks
import React from "react";
import { Link } from "react-router-dom";
// components
import Base from "./Base";
import Flavors from "./Flavors";

//store
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";
import SubmitBtn from "../../components/SubmitOrderBtn";
import CustomerInfo from "../../components/CustomerInfo";
import Details from "../../components/Details";

interface IChooseYourCupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCupcakes extends React.Component<IChooseYourCupcakesProps, {}> {
    render() {
        const getCategory = this.props.store!.CategoryStore.getCategory;
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
                                    are subject to change without further notice
                                    and will be presented in an email after your
                                    order is submitted.
                                </i>
                            </p>
                        </aside>
                        <section className="main-create-cake-container">
                            <CustomerInfo />
                        </section>
                        <section className="main-create-cupcake-container">
                            <Base />
                        </section>
                        <section className="main-create-cupcake-container">
                            <Flavors />
                        </section>
                        <section className="main-create-cupcake-container">
                            <Details category={ProductCategories.CUPCAKES} />
                        </section>
                    </section>
                    <SubmitBtn />
                </div>
                <nav className="cc-create-links-container">
                    <Link
                        onClick={() => getCategory(ProductCategories.CAKES)}
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
                        onClick={() => getCategory(ProductCategories.COOKIES)}
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

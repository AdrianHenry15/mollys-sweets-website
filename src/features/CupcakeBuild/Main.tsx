//styles
import "../../styles/CupcakeBuildStyles/Main.scss";
//frameworks
import React from "react";
import { Link } from "react-router-dom";
// components
import CupcakeCount from "./CupcakeCount";
import CupcakeFlavors from "./CupcakeFlavors";
import CupcakeDetails from "./CupcakeDetails";

//store
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";

interface IChooseYourCupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCupcakes extends React.Component<IChooseYourCupcakesProps, {}> {
    render() {
        //store actions
        const onLinkClick = this.props.store!.CategoryActions.getCategory;
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
                            <CupcakeCount />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CupcakeFlavors />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CupcakeDetails />
                        </section>
                    </section>
                </div>
                <nav className="cc-create-links-container">
                    <Link
                        onClick={() => onLinkClick(ProductCategories.CAKES)}
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
                        onClick={() => onLinkClick(ProductCategories.COOKIES)}
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

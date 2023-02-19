//styles
import "./ChooseYourSweets.scss";
// frameworks
import React from "react";
import { Link } from "react-router-dom";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductCategories } from "../store/constants/Enums";

interface IChooseYourSweetsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourSweets extends React.Component<IChooseYourSweetsProps, {}> {
    render() {
        //store actions
        const onLinkClick = this.props.store!.CategoryStore.getCategory;
        return (
            <nav className="choose-your-sweets-wrapper">
                <Link
                    onClick={() => onLinkClick(ProductCategories.CAKES)}
                    to={"/build-your-cake"}
                >
                    <CakeIcon className="choose-icon" />
                    <h3 className="customize-link-label">Build Your Cake</h3>
                </Link>
                <Link
                    onClick={() => onLinkClick(ProductCategories.CUPCAKES)}
                    to={"/choose-your-cupcakes"}
                >
                    <CupcakeIcon className="choose-icon" />
                    <h3 className="customize-link-label">
                        Choose Your Cupcakes
                    </h3>
                </Link>
                <Link
                    onClick={() => onLinkClick(ProductCategories.COOKIES)}
                    to={"/choose-your-cookies"}
                >
                    <CookieIcon className="choose-icon" />
                    <h3 className="customize-link-label">
                        Choose Your Cookies
                    </h3>
                </Link>
            </nav>
        );
    }
}

export default ChooseYourSweets;

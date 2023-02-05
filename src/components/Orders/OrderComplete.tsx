// styles
import "../../styles/CartStyles/EmptyCart.scss";
// frame
import React from "react";
import { Link } from "react-router-dom";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//icons
import { GiShoppingCart as EmptyCartIcon } from "react-icons/gi";
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";

interface IOrderCompleteProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class OrderComplete extends React.Component<IOrderCompleteProps, {}> {
    render() {
        //store observables
        const loggedIn = this.props.store!.UserStore.loggedIn;
        //store actions
        const onLinkClick = this.props.store!.CategoryActions.getCategory;
        return (
            <>
                <div className="empty-cart-container">
                    <h1 className="empty-cart-label">Your Order Is Complete</h1>
                    <div className="cart-empty-icon">
                        <EmptyCartIcon className="empty-cart-icon" />
                    </div>
                    <nav className="create-links-container">
                        <Link
                            onClick={() => onLinkClick(ProductCategories.CAKES)}
                            className="create-links"
                            to="/build-your-cake"
                        >
                            <CakeIcon className="create-icons" />
                            <span className="create-icons-label">
                                Create Cakes
                            </span>
                            <CakeIcon className="create-icons" />
                        </Link>
                        <Link
                            onClick={() =>
                                onLinkClick(ProductCategories.CUPCAKES)
                            }
                            className="create-links"
                            to="/choose-your-cupcakes"
                        >
                            <CupcakeIcon className="create-icons" />
                            <span className="create-icons-label">
                                Create Cupcakes
                            </span>
                            <CupcakeIcon className="create-icons" />
                        </Link>
                        <Link
                            onClick={() =>
                                onLinkClick(ProductCategories.COOKIES)
                            }
                            className="create-links"
                            to="/choose-your-cookies"
                        >
                            <CookieIcon className="create-icons" />
                            <span className="create-icons-label">
                                Create Cookies
                            </span>
                            <CookieIcon className="create-icons" />
                        </Link>
                    </nav>
                </div>
            </>
        );
    }
}

export default OrderComplete;

// styles
import "../../styles/ComponentStyles/CartStyles/EmptyCart.scss";
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

interface IEmptyCartProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class EmptyCart extends React.Component<IEmptyCartProps, {}> {
    render() {
        //store observables
        const emptyCartState = this.props.store!.CartStore.cartEmpty;
        //store actions
        const onLinkClick = this.props.store!.CategoryStore.getCategory;
        return (
            <>
                {emptyCartState && (
                    <div className="empty-cart-container">
                        <h1 className="empty-cart-label">Your Cart Is Empty</h1>
                        <div className="cart-empty-icon">
                            <EmptyCartIcon className="empty-cart-icon" />
                        </div>
                        <nav className="create-links-container">
                            <Link
                                onClick={() =>
                                    onLinkClick(ProductCategories.CAKES)
                                }
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
                )}
            </>
        );
    }
}

export default EmptyCart;

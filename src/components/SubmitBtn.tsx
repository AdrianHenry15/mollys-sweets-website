import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductCategories } from "../store/constants/Enums";
import { GlobalStateStore } from "../store/GlobalStateStore";
import "./SubmitBtn.scss";

interface IButtonHelperProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class SubmitBtn extends React.Component<IButtonHelperProps> {
    render() {
        const { firstName, lastName, email, phone } =
            this.props.store!.UserStore;
        const { category } = this.props.store!.CategoryStore;
        const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;

        // USER INFO CHECK
        if (
            firstName === "" ||
            lastName === "" ||
            (email === "" && phone === "")
        ) {
            return (
                <div className="order-btn-container">
                    <div className="submit-btn-container">
                        <div className="submit-link-off">
                            <span>Submit Order</span>
                        </div>
                    </div>
                    <i className="error-text">Please Finish The Contact Form</i>
                </div>
            );
        } else if (
            // CAKE INFO CHECK
            category === ProductCategories.CAKES &&
            CakeStore.base.tier === "" &&
            CakeStore.base.shape === "" &&
            CakeStore.base.size === "" &&
            CakeStore.flavors.flavor[0] === "" &&
            CakeStore.flavors.frosting[0] === "" &&
            CakeStore.flavors.filling[0] === "" &&
            CakeStore.details.arrivalDate === "" &&
            CakeStore.details.deliveryOption === ""
        ) {
            return (
                <div className="order-btn-container">
                    <div className="submit-btn-container">
                        <div className="submit-link-off">
                            <span>Submit Order</span>
                        </div>
                    </div>
                    <i className="error-text">
                        You Are Missing Required Details For Your Cake
                    </i>
                </div>
            );
        } else if (
            category === ProductCategories.CUPCAKES &&
            CupcakeStore.base.size === "" &&
            CupcakeStore.base.quantity === "" &&
            CupcakeStore.flavors.flavor === "" &&
            CupcakeStore.flavors.frosting === "" &&
            CupcakeStore.details.arrivalDate === "" &&
            CupcakeStore.details.deliveryOption === ""
        ) {
            return (
                <div className="order-btn-container">
                    <div className="submit-btn-container">
                        <div className="submit-link-off">
                            <span>Submit Order</span>
                        </div>
                    </div>
                    <i className="error-text">
                        You Are Missing Required Details For Your Cupcakes
                    </i>
                </div>
            );
        } else if (
            category === ProductCategories.COOKIES &&
            CookieStore.base.size === "" &&
            CookieStore.base.quantity === "" &&
            CookieStore.flavors.flavor === "" &&
            CookieStore.details.arrivalDate === "" &&
            CookieStore.details.deliveryOption === ""
        ) {
            return (
                <div className="order-btn-container">
                    <div className="submit-btn-container">
                        <div className="submit-link-off">
                            <span>Submit Order</span>
                        </div>
                    </div>
                    <i className="error-text">
                        You Are Missing Required Details For Your Cookies
                    </i>
                </div>
            );
        } else {
            // ALL CHECKS CLEARED
            return (
                <nav className="submit-btn-container">
                    <Link className="submit-link" to="/order">
                        <span>Submit Order</span>
                    </Link>
                </nav>
            );
        }
    }
}

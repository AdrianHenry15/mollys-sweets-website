import { inject, observer } from "mobx-react";
import React from "react";

// styles
import "../../../styles/ComponentStyles/OrderStyles/Order.scss";

//icons
import { RxCookie as CookieIcon } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GlobalStateStore } from "../../../store/GlobalStateStore";

interface ICookieOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CookieOrder extends React.Component<ICookieOrderProps> {
    render() {
        const cookieFlavor = this.props.store!.CookieStore.cookieFlavors.flavor;
        const cookieFrosting =
            this.props.store!.CookieStore.cookieFlavors.frosting;
        //store computeds
        const updateCookieCost =
            this.props.store!.ComputedCookieCosts.computedCosts
                .updateTotalCookieCost;
        return (
            <div className="product-item-container">
                <CookieIcon className="product-icon-display" />
                <div className="product-info">
                    <h4 className="product-title">{`${cookieFlavor} ${cookieFrosting} `}</h4>
                    <div className="info-btn-container">
                        <div className="info-btn remove-btn">Remove Item</div>
                        <Link to={"../../choose-your-cookies"}>
                            <span className="info-btn edit-btn">Edit Item</span>
                        </Link>
                        <div className="info-btn view-details-btn">
                            View Details
                        </div>
                    </div>
                </div>
                <h2 className="product-price">{`$${updateCookieCost()}`}</h2>
            </div>
        );
    }
}

export default CookieOrder;

import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";

// styles
import "../../../styles/ComponentStyles/OrderStyles/Order.scss";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { Link } from "react-router-dom";

interface ICupcakeOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CupcakeOrder extends React.Component<ICupcakeOrderProps> {
    render() {
        return (
            <div className="product-item-container">
                <CupcakeIcon className="product-icon-display" />
                <div className="product-info">
                    <h4 className="product-title"></h4>
                    <div className="info-btn-container">
                        <div className="info-btn remove-btn">Remove Item</div>
                        <Link to={"../../choose-your-cupcakes"}>
                            <span className="info-btn edit-btn">Edit Item</span>
                        </Link>
                        <div className="info-btn view-details-btn">
                            View Details
                        </div>
                    </div>
                </div>
                <h2 className="product-price"></h2>
            </div>
        );
    }
}

export default CupcakeOrder;

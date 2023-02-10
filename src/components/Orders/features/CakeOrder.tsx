import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";

// styles
import "../../../styles/ComponentStyles/OrderStyles/Order.scss";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { Link } from "react-router-dom";

interface ICakeOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CakeOrder extends React.Component<ICakeOrderProps> {
    render() {
        const cakeFlavor = this.props.store!.CakeStore.cakeFlavors.flavor;
        const cakeFrosting = this.props.store!.CakeStore.cakeFlavors.frosting;
        const cakeFilling = this.props.store!.CakeStore.cakeFlavors.filling;
        //store computeds
        const updateTotalCakeCost =
            this.props.store!.ComputedCakeCosts.computedCosts
                .updateTotalCakeCost;
        return (
            <div className="product-item-container">
                <CakeIcon className="product-icon-display" />
                <div className="product-info">
                    <h4 className="product-title">{`${cakeFlavor} ${cakeFrosting} ${cakeFilling}`}</h4>
                    <div className="info-btn-container">
                        <div className="info-btn remove-btn">Remove Item</div>
                        <Link to={"../../build-your-cake"}>
                            <span className="info-btn edit-btn">Edit Item</span>
                        </Link>
                        <div className="info-btn view-details-btn">
                            View Details
                        </div>
                    </div>
                </div>
                <h2 className="product-price">{`$${updateTotalCakeCost()}`}</h2>
            </div>
        );
    }
}

export default CakeOrder;

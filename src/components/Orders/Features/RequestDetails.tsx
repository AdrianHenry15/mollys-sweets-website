import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import "./OrderFeatures.scss";

interface IContactDetails {
    store?: GlobalStateStore;
}
@inject("store")
@observer
export class RequestDetails extends React.Component<IContactDetails> {
    render() {
        const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
        return (
            <section className="order-form-container">
                <div className="order-form-header">
                    <span className="weighted-label">Request Details</span>
                </div>
                <div className="order-form-info-container">
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Tier: </span>
                        <span className="feather-label">
                            {CakeStore.base.tier.toString()}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Shape: </span>
                        <span className="feather-label">
                            {CakeStore.base.shape}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Size: </span>
                        <span className="feather-label">
                            {`${CakeStore.base.size} Serves: ( ${CakeStore.base.serves} )`}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Flavor: </span>
                        <span className="feather-label">
                            {CakeStore.flavors.flavor}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Filling: </span>
                        <span className="feather-label">
                            {CakeStore.flavors.filling}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Frosting: </span>
                        <span className="feather-label">
                            {CakeStore.flavors.frosting}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Fruit: </span>
                        <span className="feather-label">
                            {CakeStore.flavors.fruit}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            When Do You Need Your Cake?:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.arrivalDate}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Pickup Or Delivery?:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.deliveryOption}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            What Is The Cake For?:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.occasion}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Who Is The Cake For?:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.recipient}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            List Of Preferred Colors:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.preferredColors}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Cake Inscription:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.inscription!}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Photo Example: </span>
                        <span className="feather-label">
                            {CakeStore.details.photoExample}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Link Example: </span>
                        <span className="feather-label">
                            {CakeStore.details.linkExample}
                        </span>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Additional Details:{" "}
                        </span>
                        <span className="feather-label">
                            {CakeStore.details.additionalDetails}
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}

export default RequestDetails;

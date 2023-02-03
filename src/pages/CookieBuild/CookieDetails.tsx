// External Dependencies
import React from "react";
import DatePicker from "react-datepicker";

//store
import { inject, observer } from "mobx-react";
import {
    DeliveryOption,
    Occasion,
    Recipient,
} from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CookieBuildStyles/CookieDetails.scss";
import "react-datepicker/dist/react-datepicker.css";

interface ICookieDetailsProps {
    store?: GlobalStateStore;
}

interface ICookieDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}

@inject("store")
@observer
class CookieDetails extends React.Component<
    ICookieDetailsProps,
    ICookieDetailsState
> {
    constructor(props: ICookieDetailsProps) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }

    // get state from local state event handler because of problems with mobx and date constructor
    getArrivalDate = (date: Date) => {
        this.setState({
            arrivalDate: date,
        });
        this.props.store!.ProductActions.detailsActions.handleArrivalDate(date);
    };

    // get state from local state event handler because of problems with mobx and date constructor
    getOccasionDate = (date: Date) => {
        this.setState({
            occasionDate: date,
        });

        this.props.store!.ProductActions.detailsActions.handleOccasionDate(
            date
        );
    };
    render() {
        //store methods
        const handleOccasion =
            this.props.store!.ProductActions.detailsActions.handleOccasion;
        const handleDeliveryOption =
            this.props.store!.ProductActions.detailsActions
                .handleDeliveryOption;
        const handleRecipient =
            this.props.store!.ProductActions.detailsActions.handleRecipient;
        const handlePreferredColor =
            this.props.store!.ProductActions.detailsActions
                .handlePreferredColors;
        const handlePhotoExample =
            this.props.store!.ProductActions.detailsActions.handlePhotoExample;
        const handleLinkExample =
            this.props.store!.ProductActions.detailsActions.handleLinkExample;
        const handleAdditionalDetails =
            this.props.store!.ProductActions.detailsActions
                .handleAdditionalDetails;
        return (
            <section className="cookie-d-container">
                <h3>Cookie Details</h3>
                <hr />
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        When Do Your Need Your Cake?
                    </h5>
                    <section className="cookie-d-calendar-container">
                        <DatePicker
                            closeOnScroll={true}
                            selected={this.state.arrivalDate}
                            onChange={(d) => this.getArrivalDate(d!)}
                        />
                    </section>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">When Is The Occasion?</h5>
                    <section className="cookie-d-calendar-container">
                        <DatePicker
                            closeOnScroll={true}
                            selected={this.state.occasionDate}
                            onChange={(d) => this.getOccasionDate(d!)}
                        />
                    </section>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">Pickup Or Delivery?</h5>
                    <div className="cookie-d-checkbox-container">
                        <form
                            name="delivery-option"
                            className="cookie-d-delivery-option-form"
                            action=""
                        >
                            <label
                                className="cookie-d-delivery-option-label"
                                htmlFor="deliveryOption"
                            >
                                Pickup
                            </label>
                            <input
                                onChange={(e) => handleDeliveryOption(e)}
                                name="delivery-option"
                                type="radio"
                                value={DeliveryOption.PICKUP}
                            />

                            <label
                                className="cookie-d-delivery-option-label"
                                htmlFor="deliveryOption"
                            >
                                Delivery
                            </label>
                            <input
                                onChange={(e) => handleDeliveryOption(e)}
                                name="delivery-option"
                                type="radio"
                                value={DeliveryOption.DELIVERY}
                            />
                        </form>
                    </div>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        What Are These Cookies For?
                    </h5>
                    <form action="">
                        <select
                            onChange={(e) => handleOccasion(e)}
                            className="cookie-d-dropdown"
                            name="cake-size-dropdown"
                        >
                            {(
                                Object.keys(Occasion) as Array<
                                    keyof typeof Occasion
                                >
                            ).map((key) => {
                                if (Occasion[key] === Occasion.NONE) {
                                    return (
                                        <option key={key} value="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option key={key} value={Occasion[key]}>
                                            {Occasion[key]}
                                        </option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                </div>

                <div
                    id="cookie-d-checkbox-wrapper"
                    className="cookie-d-make-container"
                >
                    <h5 className="cookie-d-title">
                        Who Are These Cookies For?
                    </h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleRecipient(e)}
                                className="cookie-d-dropdown"
                                name="cookie-recipient"
                                placeholder="Enter Here..."
                            />
                        </form>
                    </div>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        List Preferred Colors For Cookies
                    </h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handlePreferredColor(e)}
                                className="cookie-d-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="cookie-d-photo-example-container"
                    className="cookie-d-make-container"
                >
                    <h5 className="cookie-d-title">Photo Example Of Cookies</h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <input
                                onChange={(e) => handlePhotoExample(e)}
                                className="cookie-d-file-option"
                                type="file"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cookie design that you would like to copy
                                for your cookies. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                onChange={(e) => handleLinkExample(e)}
                                name="photo-link"
                                id="cookie-d-photo-link"
                                placeholder="Enter Link Of Cookie Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleAdditionalDetails(e)}
                                name="extra-details"
                                id="cookie-d-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
                {/* <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">Details Cost</h5>
                    <div>$0.00</div>
                </div> */}
            </section>
        );
    }
}

export default CookieDetails;

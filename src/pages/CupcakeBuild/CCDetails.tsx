//frameworks
import { inject, observer } from "mobx-react";
import React from "react";
import DatePicker from "react-datepicker";

//store
import {
    DeliveryOption,
    Occasion,
    Recipient,
} from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CupcakeBuildStyles/CCDetails.scss";
import "react-datepicker/dist/react-datepicker.css";

interface ICCDetailsProps {
    store?: GlobalStateStore;
}

interface ICCDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}

@inject("store")
@observer
class CCDetails extends React.Component<ICCDetailsProps, ICCDetailsState> {
    constructor(props: ICCDetailsProps) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }

    getArrivalDate = (date: Date) => {
        this.setState({
            arrivalDate: date,
        });

        this.props.store!.ProductActions.detailsActions.handleArrivalDate(date);
    };

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
        const handleDeliveryOption =
            this.props.store!.ProductActions.detailsActions
                .handleDeliveryOption;
        const handleOccasion =
            this.props.store!.ProductActions.detailsActions.handleOccasion;
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
            <section className="ccd-container">
                <h3>Cupcake Details</h3>
                <hr />
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        When Do Your Need Your Cake?
                    </h5>
                    <section className="calendar-container">
                        <DatePicker
                            closeOnScroll={true}
                            selected={this.state.arrivalDate}
                            onChange={(d) => this.getArrivalDate(d!)}
                        />
                    </section>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">When Is The Occasion?</h5>
                    <section className="calendar-container">
                        <DatePicker
                            closeOnScroll={true}
                            selected={this.state.occasionDate}
                            onChange={(d) => this.getOccasionDate(d!)}
                        />
                    </section>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">Pickup Or Delivery?</h5>
                    <div className="ccd-checkbox-container">
                        <form
                            name="delivery-option"
                            className="ccd-delivery-option-form"
                            action=""
                        >
                            <label
                                className="ccd-delivery-option-label"
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
                                className="ccd-delivery-option-label"
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
                <div className="ccd-make-container">
                    <h5 className="ccd-title">What Are These Cupcakes For?</h5>
                    <form action="">
                        <select
                            onChange={(e) => handleOccasion(e)}
                            className="ccd-dropdown"
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

                <div id="ccd-checkbox-wrapper" className="ccd-make-container">
                    <h5 className="ccd-title">Who Are These Cupcakes For?</h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleRecipient(e)}
                                className="ccd-dropdown"
                                name="cc-recipient"
                                placeholder="Enter Here..."
                            />
                        </form>
                    </div>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">
                        List Preferred Colors For Cupcakes
                    </h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handlePreferredColor(e)}
                                className="ccd-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="ccd-photo-example-container"
                    className="ccd-make-container"
                >
                    <h5 className="ccd-title">Photo Example Of Cupcakes</h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <input
                                onChange={(e) => handlePhotoExample(e)}
                                className="ccd-file-option"
                                type="file"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cupcake design that you would like to copy
                                for your cupcakes. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                onChange={(e) => handleLinkExample(e)}
                                name="photo-link"
                                id="ccd-photo-link"
                                placeholder="Enter Link Of Cupcake Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleAdditionalDetails(e)}
                                name="extra-details"
                                id="ccd-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default CCDetails;

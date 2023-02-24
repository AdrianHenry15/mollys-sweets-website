import { action } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import DatePicker from "react-datepicker";
import {
    DeliveryOption,
    Occasion,
    ProductCategories,
} from "../store/constants/Enums";
import { GlobalStateStore } from "../store/GlobalStateStore";
//styles
import "react-datepicker/dist/react-datepicker.css";
import "./Details.scss";
import "../GlobalStyles.scss";

/*
    everytime you click on a category
    the forms change to specified category
    the date state changes for spcified category
    some text fields change according to each category
    categories = cakes, cupcakes, cookies
*/

interface IDetailsProps {
    store?: GlobalStateStore;
    category: ProductCategories;
}

interface IDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}

@inject("store")
@observer
class Details extends React.Component<IDetailsProps, IDetailsState> {
    constructor(props: IDetailsProps) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }

    private handleOccasion = action(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;

            if (category === ProductCategories.CAKES) {
                CakeStore.details.occasion = e.target.value as Occasion;
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details.occasion = e.target.value as Occasion;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.occasion = e.target.value as Occasion;
            }
        }
    );

    private handleArrivalDate = action((d: Date) => {
        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.CakeStore.details.arrivalDate = d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.CookieStore.details.arrivalDate =
                d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        } else {
            this.props.store!.CupcakeStore.details.arrivalDate =
                d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        }
    });
    private handleRecipient = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;
            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.recipient = value;
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details.recipient = value;
            } else {
                CookieStore.details.recipient = value;
            }
        }
    );
    private handleDeliveryOption = action(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.deliveryOption = value as DeliveryOption;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.deliveryOption = value as DeliveryOption;
            } else {
                CupcakeStore.details.deliveryOption = value as DeliveryOption;
            }
        }
    );
    private handlePreferredColors = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.preferredColors = value;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.preferredColors = value;
            } else {
                CupcakeStore.details.preferredColors = value;
            }
        }
    );
    private handleInscription = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.inscription = value;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.inscription = value;
            } else {
                CupcakeStore.details.inscription = value;
            }
        }
    );
    // TODO: get photo for order and cart
    private handlePhotoExample = action(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.photoExample = value;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.photoExample = value;
            } else {
                CupcakeStore.details.photoExample = value;
            }
        }
    );
    // TODO: get link for order and cart
    private handleLinkExample = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.linkExample = value;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.linkExample = value;
            } else {
                CupcakeStore.details.linkExample = value;
            }
        }
    );
    private handleAdditionalDetails = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
            if (category === ProductCategories.CAKES) {
                CakeStore.details.additionalDetails = value;
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.additionalDetails = value;
            } else {
                CupcakeStore.details.additionalDetails = value;
            }
        }
    );

    render() {
        const category = this.props.category!;
        const charToUpper = this.props.store!.HelperStore.charToUpper(category);
        //main
        return (
            <section className="details-cake-details-container">
                <h3>{charToUpper!} Details</h3>
                <hr />
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        When Do You Need Your {charToUpper!}?
                    </h5>
                    <section className="cake-calendar-container">
                        {/* TODO: Create local state to get Date String and cast it to GlobalStateStore */}
                        <DatePicker
                            selected={this.state.arrivalDate}
                            onChange={(date) => this.handleArrivalDate(date!)}
                        />
                    </section>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">Pickup Or Delivery?</h5>
                    <div className="details-checkbox-container">
                        <label
                            className="cake-delivery-option-label"
                            htmlFor="deliveryOption"
                        >
                            Pickup
                        </label>
                        <input
                            onChange={(e) => this.handleDeliveryOption(e)}
                            name="delivery-option"
                            type="radio"
                            value={DeliveryOption.PICKUP}
                        />

                        <label
                            className="cake-delivery-option-label"
                            htmlFor="deliveryOption"
                        >
                            Delivery
                        </label>
                        <input
                            onChange={(e) => this.handleDeliveryOption(e)}
                            name="delivery-option"
                            type="radio"
                            value={DeliveryOption.DELIVERY}
                        />
                    </div>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        What Is The {charToUpper!} For?
                    </h5>

                    <select
                        onChange={(e) => this.handleOccasion(e)}
                        className="details-cake-size-dropdown"
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
                </div>

                <div
                    id="details-checkbox-wrapper"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Who Are We Celebrating?</h5>
                    <div className="details-textbox-container">
                        <textarea
                            onChange={(e) => this.handleRecipient(e)}
                            className="details-cake-size-dropdown"
                            name="cake-recipient"
                            placeholder="Enter Here..."
                        />
                    </div>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        List Preferred Colors For {charToUpper!}
                    </h5>
                    <div className="details-textbox-container">
                        <textarea
                            onChange={(e) => this.handlePreferredColors(e)}
                            className="details-cake-size-dropdown"
                            name="cake-colors"
                            placeholder="Enter Colors Here..."
                        />
                    </div>
                </div>
                <div
                    id="details-cake-inscription-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">
                        Write Inscription (If any)
                    </h5>
                    <div className="details-textbox-container">
                        <textarea
                            onChange={(e) => this.handleInscription(e)}
                            className="details-cake-size-dropdown"
                            name="cake-colors"
                            placeholder="Enter Inscription Here..."
                            maxLength={80}
                        />
                    </div>
                </div>
                <div
                    id="details-photo-example-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Photo Example</h5>
                    <div className="details-textbox-container">
                        <input
                            className="details-file-option"
                            type="file"
                            name="cake-colors"
                            maxLength={80}
                            onChange={(e) => this.handlePhotoExample(e)}
                        />
                        <aside>
                            Upload any photo example <br />
                            of a design that you would like to copy for your
                            product. <br />
                            You may also send a link in the field below.
                        </aside>
                        <textarea
                            onChange={(e) => this.handleLinkExample(e)}
                            name="photo-link"
                            id="details-photo-link"
                            placeholder="Enter Link Of Cake Design Example Here..."
                            maxLength={450}
                        ></textarea>
                    </div>
                </div>
                <div
                    id="details-cake-inscription-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="details-textbox-container">
                        <textarea
                            onChange={(e) => this.handleAdditionalDetails(e)}
                            name="extra-details"
                            id="details-extra-details"
                            placeholder="Enter Details Here..."
                        ></textarea>
                    </div>
                </div>
            </section>
        );
    }
}

export default Details;

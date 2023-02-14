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
                console.log(CakeStore.details.occasion);
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details.occasion = e.target.value as Occasion;
                console.log(CakeStore.details.occasion);
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.occasion = e.target.value as Occasion;
                console.log(CakeStore.details.occasion);
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
            console.log(
                `Arrival Date: ${
                    this.props.store!.CakeStore.details.arrivalDate
                }`
            );
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.CookieStore.details.arrivalDate =
                d.toDateString();
            this.setState({
                arrivalDate: d,
            });
            console.log(
                `Arrival Date: ${
                    this.props.store!.CakeStore.details.arrivalDate
                }`
            );
        } else {
            this.props.store!.CupcakeStore.details.arrivalDate =
                d.toDateString();
            this.setState({
                arrivalDate: d,
            });
            console.log(
                `Arrival Date: ${
                    this.props.store!.CakeStore.details.arrivalDate
                }`
            );
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
                console.log(`Cake Recipient: ${CakeStore.details.recipient}`);
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details.recipient = value;
                console.log(
                    `Cupcake Recipient: ${CupcakeStore.details.recipient}`
                );
            } else {
                CookieStore.details.recipient = value;
                console.log(
                    `Cookie Recipient: ${CookieStore.details.recipient}`
                );
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
                console.log(
                    `Cake Delivery Option: ${CakeStore.details.deliveryOption}`
                );
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.deliveryOption = value as DeliveryOption;
                console.log(
                    `Cookie Delivery Option: ${CookieStore.details.deliveryOption}`
                );
            } else {
                CakeStore.details.deliveryOption = value as DeliveryOption;
                console.log(
                    `Cupcake Delivery Option: ${CupcakeStore.details.deliveryOption}`
                );
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
                console.log(
                    `Preferred Colors: ${CakeStore.details.preferredColors}`
                );
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.preferredColors = value;
                console.log(
                    `Preferred Colors: ${CookieStore.details.preferredColors}`
                );
            } else {
                CakeStore.details.preferredColors = value;
                console.log(
                    `Cupcake Preferred Colors: ${CupcakeStore.details.preferredColors}`
                );
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
                console.log(
                    `Cake Inscription: ${CakeStore.details.inscription}`
                );
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.inscription = value;
                console.log(
                    `Cookie Inscription: ${CookieStore.details.inscription}`
                );
            } else {
                CupcakeStore.details.inscription = value;
                console.log(
                    `Cupcake Inscription: ${CupcakeStore.details.inscription}`
                );
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
                console.log(
                    `Cake Photo Example: ${CakeStore.details.photoExample}`
                );
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.photoExample = value;
                console.log(
                    `Cookie Photo Example: ${CookieStore.details.photoExample}`
                );
            } else {
                CupcakeStore.details.photoExample = value;
                console.log(
                    `Cupcake Photo Example: ${CupcakeStore.details.photoExample}`
                );
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
                console.log(`Link Example: ${CakeStore.details.linkExample}`);
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.linkExample = value;
                console.log(`Link Example: ${CookieStore.details.linkExample}`);
            } else {
                CupcakeStore.details.linkExample = value;
                console.log(
                    `Link Example: ${CupcakeStore.details.linkExample}`
                );
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
                console.log(
                    `Additional Details: ${CakeStore.details.additionalDetails}`
                );
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details.additionalDetails = value;
                console.log(
                    `Additional Details: ${CookieStore.details.additionalDetails}`
                );
            } else {
                CupcakeStore.details.additionalDetails = value;
                console.log(
                    `Additional Details: ${CupcakeStore.details.additionalDetails}`
                );
            }
        }
    );

    private charToUpper = (name: string) => {
        let strLower = name.toLowerCase();
        const category = this.props.category;

        // if the category is Cakes make sure to include the 's' at the end of the property value
        return category === ProductCategories.CAKES
            ? strLower.charAt(0).toUpperCase() + name.slice(1).replace("s", "")
            : strLower.charAt(0).toUpperCase() + name.slice(1);
    };

    render() {
        const category = this.props.category!;
        //main
        return (
            <section className="details-cake-details-container">
                <h3>{this.charToUpper(category)} Details</h3>
                <hr />
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        When Do You Need Your {this.charToUpper(category)}?
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
                        What Is The {this.charToUpper(category)} For?
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
                    <h5 className="details-title">Who Is The Cake For?</h5>
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
                        List Preferred Colors For Cake
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
                        Write Cake Inscription (If any)
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
                    <h5 className="details-title">Photo Example Of Cake</h5>
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
                            of a cake design that you would like to copy for
                            your cake. <br />
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

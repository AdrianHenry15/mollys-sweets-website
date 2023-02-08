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
import { Form } from "./Form";

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

    getArrivalDate = action((d: Date) => {
        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeArrivalDate = d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieArrivalDate = d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        } else {
            this.props.store!.cupcakeArrivalDate = d.toDateString();
            this.setState({
                arrivalDate: d,
            });
        }
    });
    getOccasionDate = action((d: Date) => {
        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeOcassionDate = d.toDateString();
            this.setState({
                occasionDate: d,
            });
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieOcassionDate = d.toDateString();
            this.setState({
                occasionDate: d,
            });
        } else {
            this.props.store!.cupcakeOcassionDate = d.toDateString();
        }
    });
    getOccasion = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeOccasion = value as Occasion;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieOccasion = value as Occasion;
        } else {
            this.props.store!.cupcakeOccasion = value as Occasion;
        }
    });
    getRecipient = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let select: HTMLTextAreaElement = e.target;
        let value: string = select.value;
        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeRecipient = value;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieRecipient = value;
        } else {
            this.props.store!.cupcakeRecipient = value;
        }
    });
    getDeliveryOption = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;

        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeDeliveryOption = value as DeliveryOption;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieDeliveryOption = value as DeliveryOption;
        } else {
            this.props.store!.cupcakeDeliveryOption = value as DeliveryOption;
        }
    });
    getPreferredColors = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let select: HTMLTextAreaElement = e.target;
        let value: string = select.value;

        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakePreferredColors = value;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookiePreferredColors = value;
        } else {
            this.props.store!.cupcakePreferredColors = value;
        }
    });
    getInscription = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let select: HTMLTextAreaElement = e.target;
        let value: string = select.value;

        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeInscription = value;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieInscription = value;
        } else {
            this.props.store!.cupcakeInscription = value;
        }
    });
    // TODO: get photo for order and cart
    getPhotoExample = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;

        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakePhotoExample = value;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookiePhotoExample = value;
        } else {
            this.props.store!.cupcakePhotoExample = value;
        }
    });
    // TODO: get link for order and cart
    getLinkExample = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let select: HTMLTextAreaElement = e.target;
        let value: string = select.value;

        const category = this.props.category;
        if (category === ProductCategories.CAKES) {
            this.props.store!.cakeLinkExample = value;
        } else if (category === ProductCategories.COOKIES) {
            this.props.store!.cookieLinkExample = value;
        } else {
            this.props.store!.cupcakeLinkExample = value;
        }
    });
    getAdditionalDetails = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            const category = this.props.category;
            if (category === ProductCategories.CAKES) {
                this.props.store!.cakeAdditionalDetails = value;
            } else if (category === ProductCategories.COOKIES) {
                this.props.store!.cookieAdditionalDetails = value;
            } else {
                this.props.store!.cupcakeAdditionalDetails = value;
            }
        }
    );

    charToUpper = (name: string) => {
        let strLower = name.toLowerCase();
        const category = this.props.category;

        // if the category is Cakes make sure to include the 's' at the end of the property value
        return category === ProductCategories.CAKES
            ? strLower.charAt(0).toUpperCase() + name.slice(1).replace("s", "")
            : strLower.charAt(0).toUpperCase() + name.slice(1);
    };

    render() {
        const category = this.props.category!;
        const cakeDeliveryOptionValue = this.props.store!.cakeDeliveryOption;
        const cupcakeDeliveryOptionValue =
            this.props.store!.cupcakeDeliveryOption;
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
                            onChange={(date) => this.getArrivalDate(date!)}
                        />
                    </section>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">When Is The Occasion?</h5>
                    <section className="cake-calendar-container">
                        {/* TODO: Create local state to get Date String and cast it to GlobalStateStore */}
                        <DatePicker
                            selected={this.state.occasionDate}
                            onChange={(date) => this.getOccasionDate(date!)}
                        />
                    </section>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">Pickup Or Delivery?</h5>
                    <div className="details-checkbox-container">
                        <form
                            name="delivery-option"
                            className="cake-delivery-option-form"
                            action=""
                        >
                            <label
                                className="cake-delivery-option-label"
                                htmlFor="deliveryOption"
                            >
                                Pickup
                            </label>
                            <input
                                onChange={(e) => this.getDeliveryOption(e)}
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
                                onChange={(e) => this.getDeliveryOption(e)}
                                name="delivery-option"
                                type="radio"
                                value={DeliveryOption.DELIVERY}
                            />
                        </form>
                    </div>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        What Is The {this.charToUpper(category)} For?
                    </h5>
                    <form action="">
                        <select
                            // onChange={(e) => handleOccasion(e)}
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
                    </form>
                </div>

                <div
                    id="details-checkbox-wrapper"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Who Is The Cake For?</h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => this.getRecipient(e)}
                                className="details-cake-size-dropdown"
                                name="cake-recipient"
                                placeholder="Enter Here..."
                            />
                        </form>
                    </div>
                </div>
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        List Preferred Colors For Cake
                    </h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => this.getPreferredColors(e)}
                                className="details-cake-size-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
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
                        <form action="">
                            <textarea
                                onChange={(e) => this.getInscription(e)}
                                className="details-cake-size-dropdown"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="details-photo-example-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Photo Example Of Cake</h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <input
                                className="details-file-option"
                                type="file"
                                name="cake-colors"
                                maxLength={80}
                                onChange={(e) => this.getPhotoExample(e)}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cake design that you would like to copy for
                                your cake. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                onChange={(e) => this.getLinkExample(e)}
                                name="photo-link"
                                id="details-photo-link"
                                placeholder="Enter Link Of Cake Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
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
                        <form action="">
                            <textarea
                                onChange={(e) => this.getAdditionalDetails(e)}
                                name="extra-details"
                                id="details-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Details;

import { action } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import DatePicker from "react-datepicker";
import {
    DeliveryOption,
    Occasion,
    ProductCategories,
    Recipient,
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

    //TODO: consolidate all detail methods into 1 function

    private handleTextAreaDetails = action(
        (
            e: React.ChangeEvent<HTMLTextAreaElement>,
            value: // | "arrivalDate"
            // | "deliveryOption"
            // | "occasion"
            | "recipient"
                // | "checkedState"
                | "preferredColors"
                | "inscription"
                // | "photoExample"
                | "linkExample"
                | "additionalDetails"
        ) => {
            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;

            if (category === ProductCategories.CAKES) {
                CakeStore.details[value] = e.target.value;
                console.log(CakeStore.details[value]);
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details[value] = e.target.value;
                console.log(CakeStore.details[value]);
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details[value] = e.target.value;
                console.log(CakeStore.details[value]);
            }
        }
    );

    private handleInputDetails = action(
        (
            e: React.ChangeEvent<HTMLInputElement>,
            value: "deliveryOption" | "photoExample"
        ) => {
            const category = this.props.category;
            const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;

            if (category === ProductCategories.CAKES) {
                CakeStore.details[value] = e.target.value as DeliveryOption;
                console.log(CakeStore.details[value]);
            } else if (category === ProductCategories.CUPCAKES) {
                CupcakeStore.details[value] = e.target.value as DeliveryOption;
                console.log(CakeStore.details[value]);
            } else if (category === ProductCategories.COOKIES) {
                CookieStore.details[value] = e.target.value as DeliveryOption;
                console.log(CakeStore.details[value]);
            }
        }
    );

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
    // getRecipient = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let select: HTMLTextAreaElement = e.target;
    //     let value: string = select.value;
    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakeRecipient = value;
    //         console.log(`Recipient: ${this.props.store!.cakeRecipient}`);
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookieRecipient = value;
    //         console.log(`Recipient: ${this.props.store!.cookieRecipient}`);
    //     } else {
    //         this.props.store!.cupcakeRecipient = value;
    //         console.log(`Recipient: ${this.props.store!.cupcakeRecipient}`);
    //     }
    // });
    // getDeliveryOption = action((e: React.ChangeEvent<HTMLInputElement>) => {
    //     let select: HTMLInputElement = e.target;
    //     let value: string = select.value;

    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakeDeliveryOption = value as DeliveryOption;
    //         console.log(
    //             `Delivery Option: ${this.props.store!.cakeDeliveryOption}`
    //         );
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookieDeliveryOption = value as DeliveryOption;
    //         console.log(
    //             `Delivery Option: ${this.props.store!.cookieDeliveryOption}`
    //         );
    //     } else {
    //         this.props.store!.cupcakeDeliveryOption = value as DeliveryOption;
    //         console.log(
    //             `Delivery Option: ${this.props.store!.cupcakeDeliveryOption}`
    //         );
    //     }
    // });
    // getPreferredColors = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let select: HTMLTextAreaElement = e.target;
    //     let value: string = select.value;

    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakePreferredColors = value;
    //         console.log(
    //             `Preferred Colors: ${this.props.store!.cakePreferredColors}`
    //         );
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookiePreferredColors = value;
    //         console.log(
    //             `Preferred Colors: ${this.props.store!.cookiePreferredColors}`
    //         );
    //     } else {
    //         this.props.store!.cupcakePreferredColors = value;
    //         console.log(
    //             `Preferred Colors: ${this.props.store!.cupcakePreferredColors}`
    //         );
    //     }
    // });
    // getInscription = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let select: HTMLTextAreaElement = e.target;
    //     let value: string = select.value;

    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakeInscription = value;
    //         console.log(`Inscription: ${this.props.store!.cakeInscription}`);
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookieInscription = value;
    //         console.log(`Inscription: ${this.props.store!.cookieInscription}`);
    //     } else {
    //         this.props.store!.cupcakeInscription = value;
    //         console.log(`Inscription: ${this.props.store!.cupcakeInscription}`);
    //     }
    // });
    // // TODO: get photo for order and cart
    // getPhotoExample = action((e: React.ChangeEvent<HTMLInputElement>) => {
    //     let select: HTMLInputElement = e.target;
    //     let value: string = select.value;

    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakePhotoExample = value;
    //         console.log(`Photo Example: ${this.props.store!.cakePhotoExample}`);
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookiePhotoExample = value;
    //         console.log(
    //             `Photo Example: ${this.props.store!.cookiePhotoExample}`
    //         );
    //     } else {
    //         this.props.store!.cupcakePhotoExample = value;
    //         console.log(
    //             `Photo Example: ${this.props.store!.cupcakePhotoExample}`
    //         );
    //     }
    // });
    // // TODO: get link for order and cart
    // getLinkExample = action((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let select: HTMLTextAreaElement = e.target;
    //     let value: string = select.value;

    //     const category = this.props.category;
    //     if (category === ProductCategories.CAKES) {
    //         this.props.store!.cakeLinkExample = value;
    //         console.log(`Link Example: ${this.props.store!.cakeLinkExample}`);
    //     } else if (category === ProductCategories.COOKIES) {
    //         this.props.store!.cookieLinkExample = value;
    //         console.log(`Link Example: ${this.props.store!.cookieLinkExample}`);
    //     } else {
    //         this.props.store!.cupcakeLinkExample = value;
    //         console.log(
    //             `Link Example: ${this.props.store!.cupcakeLinkExample}`
    //         );
    //     }
    // });
    // getAdditionalDetails = action(
    //     (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //         let select: HTMLTextAreaElement = e.target;
    //         let value: string = select.value;

    //         const category = this.props.category;
    //         if (category === ProductCategories.CAKES) {
    //             this.props.store!.cakeAdditionalDetails = value;
    //             console.log(
    //                 `Additional Details: ${
    //                     this.props.store!.cakeAdditionalDetails
    //                 }`
    //             );
    //         } else if (category === ProductCategories.COOKIES) {
    //             this.props.store!.cookieAdditionalDetails = value;
    //             console.log(
    //                 `Additional Details: ${
    //                     this.props.store!.cookieAdditionalDetails
    //                 }`
    //             );
    //         } else {
    //             this.props.store!.cupcakeAdditionalDetails = value;
    //             console.log(
    //                 `Additional Details: ${
    //                     this.props.store!.cupcakeAdditionalDetails
    //                 }`
    //             );
    //         }
    //     }
    // );

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
        const cakeDeliveryOptionValue =
            this.props.store!.CakeStore.details.deliveryOption;
        const cupcakeDeliveryOptionValue =
            this.props.store!.CupcakeStore.details.deliveryOption;
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
                            onChange={(e) =>
                                this.handleInputDetails(e, "deliveryOption")
                            }
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
                            onChange={(e) =>
                                this.handleInputDetails(e, "deliveryOption")
                            }
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
                            onChange={(e) =>
                                this.handleTextAreaDetails(e, "recipient")
                            }
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
                            onChange={(e) =>
                                this.handleTextAreaDetails(e, "preferredColors")
                            }
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
                            onChange={(e) =>
                                this.handleTextAreaDetails(e, "inscription")
                            }
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
                            onChange={(e) =>
                                this.handleInputDetails(e, "photoExample")
                            }
                        />
                        <aside>
                            Upload any photo example <br />
                            of a cake design that you would like to copy for
                            your cake. <br />
                            You may also send a link in the field below.
                        </aside>
                        <textarea
                            onChange={(e) =>
                                this.handleTextAreaDetails(e, "linkExample")
                            }
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
                            onChange={(e) =>
                                this.handleTextAreaDetails(
                                    e,
                                    "additionalDetails"
                                )
                            }
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

import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import "./OrderFeatures.scss";
import { ProductCategories } from "../../../store/constants/Enums";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EditComponent from "./EditComponent";

interface IContactDetailsProps {
    store?: GlobalStateStore;
}

interface IContactDetailsState {
    toggleDropdown: boolean;
}
@inject("store")
@observer
export class RequestDetails extends React.Component<
    IContactDetailsProps,
    IContactDetailsState
> {
    constructor(props: IContactDetailsProps) {
        super(props);

        this.state = {
            toggleDropdown: false,
        };
    }
    renderRequestBaseAndFlavors = (): JSX.Element => {
        const category = this.props.store!.CategoryStore.category;
        const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
        if (category === ProductCategories.CAKES) {
            return (
                <>
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
                </>
            );
        } else {
            return (
                <>
                    <div className="order-form-info">
                        <span className="weighted-label">Size: </span>
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.base.size}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.base.size}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Quantity: </span>
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.base.quantity}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.base.quantity}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Flavor: </span>
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.flavors.flavor}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.flavors.flavor}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Frosting: </span>
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.flavors.frosting}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.flavors.frosting}
                            </span>
                        )}
                    </div>
                </>
            );
        }
    };

    toggleDropdownState = () => {
        this.setState({
            toggleDropdown: !this.state.toggleDropdown,
        });
    };

    renderEditLink = (): string => {
        const category = this.props.store!.CategoryStore.category;
        if (category === ProductCategories.CAKES) {
            return "/build-your-cake";
        } else if (category === ProductCategories.CUPCAKES) {
            return "/create-your-cupcakes";
        } else {
            return "/create-your-cookies";
        }
    };
    render() {
        const category = this.props.store!.CategoryStore.category;
        const { CakeStore, CupcakeStore, CookieStore } = this.props.store!;
        return (
            <section className="order-form-container">
                <div className="order-form-header">
                    <span className="weighted-label">
                        Request Details
                        <EditComponent
                            toggleDropdown={this.state.toggleDropdown}
                        />
                    </span>

                    <BiDotsVerticalRounded
                        onClick={() => this.toggleDropdownState()}
                        className="details-icon"
                    />
                </div>
                <div className="order-form-info-container">
                    {this.renderRequestBaseAndFlavors()}
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Pickup/Delivery Date:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.arrivalDate}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.arrivalDate}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.arrivalDate}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Pickup Or Delivery?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.deliveryOption}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.deliveryOption}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.deliveryOption}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            What Is The Cake For?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.occasion}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.occasion}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.occasion}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Who Is The Cake For?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.recipient}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.recipient}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.recipient}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            List Of Preferred Colors:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.preferredColors}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.preferredColors}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.preferredColors}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Cake Inscription:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.inscription!}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.inscription!}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.inscription!}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Photo Example: </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.photoExample}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.photoExample}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.photoExample}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Link Example: </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.linkExample}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.linkExample}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.linkExample}
                            </span>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Additional Details:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <span className="feather-label">
                                {CakeStore.details.additionalDetails}
                            </span>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <span className="feather-label">
                                {CupcakeStore.details.additionalDetails}
                            </span>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <span className="feather-label">
                                {CookieStore.details.additionalDetails}
                            </span>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default RequestDetails;

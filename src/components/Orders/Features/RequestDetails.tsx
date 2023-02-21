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
                        <i className="feather-label">
                            {CakeStore.base.tier.toString()}
                        </i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Shape: </span>
                        <i className="feather-label">{CakeStore.base.shape}</i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Size: </span>
                        <i className="feather-label">
                            {`${CakeStore.base.size} Serves: ( ${CakeStore.base.serves} )`}
                        </i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Flavor: </span>
                        <i className="feather-label">
                            {CakeStore.flavors.flavor}
                        </i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Filling: </span>
                        <i className="feather-label">
                            {CakeStore.flavors.filling}
                        </i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Cake Frosting: </span>
                        <i className="feather-label">
                            {CakeStore.flavors.frosting}
                        </i>
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Fruit: </span>
                        <i className="feather-label">
                            {CakeStore.flavors.fruit}
                        </i>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="order-form-info">
                        <span className="weighted-label">Size: </span>
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.base.size}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.base.size}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Quantity: </span>
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.base.quantity}
                            </i>
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
                            <i className="feather-label">
                                {CookieStore.flavors.flavor}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.flavors.flavor}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Frosting: </span>
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.flavors.frosting}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.flavors.frosting}
                            </i>
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
        const charToUpper = this.props.store!.charToUpper(category);
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
                            When Do You Need Your {charToUpper}?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.arrivalDate}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.arrivalDate}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.arrivalDate}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Pickup Or Delivery?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.deliveryOption}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.deliveryOption}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.deliveryOption}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            What Is The {charToUpper} For?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.occasion}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.occasion}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.occasion}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Who Are We Celebrating?:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.recipient}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.recipient}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.recipient}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            List Of Preferred Colors:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.preferredColors}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.preferredColors}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.preferredColors}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Cake Inscription:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.inscription!}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.inscription!}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.inscription!}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Photo Example: </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.photoExample}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.photoExample}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.photoExample}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">Link Example: </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.linkExample}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.linkExample}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.linkExample}
                            </i>
                        )}
                    </div>
                    <div className="order-form-info">
                        <span className="weighted-label">
                            Additional Details:{" "}
                        </span>
                        {category === ProductCategories.CAKES && (
                            <i className="feather-label">
                                {CakeStore.details.additionalDetails}
                            </i>
                        )}
                        {category === ProductCategories.CUPCAKES && (
                            <i className="feather-label">
                                {CupcakeStore.details.additionalDetails}
                            </i>
                        )}
                        {category === ProductCategories.COOKIES && (
                            <i className="feather-label">
                                {CookieStore.details.additionalDetails}
                            </i>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default RequestDetails;

//styles
import "../../styles/CakeBuildStyles/Main.scss";
// External Dependencies
import React from "react";
//components
import CakeBase from "./CakeBase";
import Flavors from "./CakeFlavors";
import OptionsOverview from "./OptionsOverview";
import CakeDetails from "./CakeDetails";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { Link } from "react-router-dom";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";
import { action } from "mobx";
import { Form, minLength, required } from "../../components/Form";
import CustomerInfo from "../../components/CustomerInfo";

interface IBuildYourCakeProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class BuildYourCake extends React.Component<IBuildYourCakeProps, {}> {
    fillOrder = action(() => {
        this.props.store!.OrderStore.orderFilled = true;
    });
    render() {
        //store vars
        //user
        const firstName = this.props.store!.UserStore.firstName;
        const lastName = this.props.store!.UserStore.lastName;
        const email = this.props.store!.UserStore.email;
        //base
        const cakeTier = this.props.store!.CakeStore.cakeBase.tier;
        const cakeShape = this.props.store!.CakeStore.cakeBase.shape;
        const cakeSize = this.props.store!.CakeStore.cakeBase.size;
        //flavors
        const cakeFlavor = this.props.store!.CakeStore.cakeFlavors.flavor;
        const cakeFrosting = this.props.store!.CakeStore.cakeFlavors.frosting;
        const cakeFilling = this.props.store!.CakeStore.cakeFlavors.frosting;
        const cakeFruit = this.props.store!.CakeStore.cakeFlavors.fruit;
        //details
        const arrivalDate = this.props.store!.cakeArrivalDate;
        const deliveryOption = this.props.store!.cakeDeliveryOption;
        const occasion = this.props.store!.cakeOccasion;
        const recipient = this.props.store!.cakeRecipient;
        const colors = this.props.store!.cakePreferredColors;
        const inscription = this.props.store!.cakeInscription;
        const photo = this.props.store!.cakePhotoExample;
        const link = this.props.store!.cakeLinkExample;
        const additionalDetails = this.props.store!.cakeAdditionalDetails;
        //store actions
        const onLinkClick = this.props.store!.CategoryActions.getCategory;
        return (
            <section className="main-build-cake-wrapper">
                <div className="main-build-cake-container">
                    <OptionsOverview />
                    <section className="main-customize-cake-container">
                        <aside className="main-note">
                            <p>
                                <strong>NOTE: </strong>
                                <i>
                                    The form below is only to request a custom
                                    cake quote. Final cake order details will
                                    still need further discussion. All prices
                                    are subject to change without further
                                    notice.
                                </i>
                            </p>
                        </aside>
                        <Form
                            defaultValues={{
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                tier: cakeTier,
                                shape: cakeShape,
                                size: cakeSize,
                                flavor: cakeFlavor,
                                frosting: cakeFrosting,
                                filling: cakeFilling,
                                fruit: cakeFruit,
                                arrivalDate: arrivalDate,
                                deliveryOption: deliveryOption,
                                occasion: occasion,
                                recipient: recipient,
                                colors: colors,
                                inscription: inscription,
                                photo: photo,
                                link: link,
                                additionalDetails: additionalDetails,
                            }}
                            validationRules={{
                                firstName: [
                                    { validator: required },
                                    { validator: minLength, arg: 2 },
                                ],
                                lastName: [
                                    { validator: required },
                                    { validator: minLength, arg: 2 },
                                ],
                                email: { validator: required },
                                tier: { validator: required },
                                shape: { validator: required },
                                size: { validator: required },
                                flavor: { validator: required },
                                frosting: { validator: required },
                                filling: { validator: required },
                                fruit: { validator: required },
                                arrivalDate: { validator: required },
                                deliveryOption: { validator: required },
                                occasion: { validator: required },
                                recipient: { validator: required },
                                colors: { validator: required },
                            }}
                        >
                            <section>
                                <CustomerInfo />
                            </section>
                            <section className="main-create-cake-container">
                                <CakeBase />
                            </section>
                            <section className="main-create-cake-container">
                                <Flavors />
                            </section>
                            <section className="main-create-cake-container">
                                <CakeDetails />
                            </section>
                        </Form>
                    </section>
                    <nav className="cake-order-complete-container">
                        <Link
                            onClick={() => this.fillOrder()}
                            className="cake-order-complete"
                            to="/customer-info"
                        >
                            <span>Submit Request</span>
                        </Link>
                    </nav>
                </div>
                <nav className="byc-create-links-container">
                    <Link
                        onClick={() => onLinkClick(ProductCategories.CUPCAKES)}
                        className="byc-create-links byc-cupcakes-link"
                        to="/choose-your-cupcakes"
                    >
                        <CupcakeIcon className="byc-create-icons" />
                        <span className="byc-create-icons-label">
                            Create Cupcakes
                        </span>
                        <CupcakeIcon className="byc-create-icons" />
                    </Link>
                    <Link
                        onClick={() => onLinkClick(ProductCategories.COOKIES)}
                        className="byc-create-links byc-cookies-link"
                        to="/choose-your-cookies"
                    >
                        <CookieIcon className="byc-create-icons" />
                        <span className="byc-create-icons-label">
                            Create Cookies
                        </span>
                        <CookieIcon className="byc-create-icons" />
                    </Link>
                </nav>
            </section>
        );
    }
}

export default BuildYourCake;

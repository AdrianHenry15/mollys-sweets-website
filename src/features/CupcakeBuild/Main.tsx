//styles
import "../../styles/CupcakeBuildStyles/Main.scss";
//frameworks
import React from "react";
import { Link } from "react-router-dom";
// components
import CupcakeCount from "./CupcakeCount";
import CupcakeFlavors from "./CupcakeFlavors";
import CupcakeDetails from "./CupcakeDetails";

//store
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";
import { Form, minLength, required } from "../../components/Form";

interface IChooseYourCupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCupcakes extends React.Component<IChooseYourCupcakesProps, {}> {
    render() {
        //store vars
        //user
        const firstName = this.props.store!.UserStore.firstName;
        const lastName = this.props.store!.UserStore.lastName;
        const email = this.props.store!.UserStore.email;
        //base
        const quantity = this.props.store!.CupcakeStore.cupcakeCount.quantity;
        const size = this.props.store!.CupcakeStore.cupcakeCount.size;
        ///flavors
        const flavor = this.props.store!.CupcakeStore.cupcakeFlavors.flavor;
        const frosting = this.props.store!.CupcakeStore.cupcakeFlavors.frosting;
        //details
        const arrivalDate = this.props.store!.cupcakeArrivalDate;
        const deliveryOption = this.props.store!.cupcakeDeliveryOption;
        const occasion = this.props.store!.cupcakeOccasion;
        const recipient = this.props.store!.cupcakeRecipient;
        const colors = this.props.store!.cupcakePreferredColors;
        const inscription = this.props.store!.cupcakeInscription;
        const photo = this.props.store!.cupcakePhotoExample;
        const link = this.props.store!.cupcakeLinkExample;
        const additionalDetails = this.props.store!.cupcakeAdditionalDetails;
        //store actions
        const onLinkClick = this.props.store!.CategoryActions.getCategory;
        return (
            <section className="create-container">
                <div className="main-build-cupcake-container">
                    {/* <OptionsOverview /> */}
                    <section className="main-customize-cupcake-container">
                        <aside className="main-cc-note">
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
                                quantity: quantity,
                                size: size,
                                flavor: flavor,
                                frosting: frosting,
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
                            <section className="main-create-cupcake-container">
                                <CupcakeCount />
                            </section>
                            <section className="main-create-cupcake-container">
                                <CupcakeFlavors />
                            </section>
                            <section className="main-create-cupcake-container">
                                <CupcakeDetails />
                            </section>
                        </Form>
                    </section>
                </div>
                <nav className="cc-create-links-container">
                    <Link
                        onClick={() => onLinkClick(ProductCategories.CAKES)}
                        className="cc-create-links c-cake-link"
                        to="/build-your-cake"
                    >
                        <CakeIcon className="cc-create-icons" />
                        <span className="cc-create-icons-label">
                            Create Cakes
                        </span>
                        <CakeIcon className="cc-create-icons" />
                    </Link>
                    <Link
                        onClick={() => onLinkClick(ProductCategories.COOKIES)}
                        className="cc-create-links c-cupcake-link"
                        to="/choose-your-cookies"
                    >
                        <CookieIcon className="cc-create-icons" />
                        <span className="cc-create-icons-label">
                            Create Cookies
                        </span>
                        <CookieIcon className="cc-create-icons" />
                    </Link>
                </nav>
            </section>
        );
    }
}

export default ChooseYourCupcakes;

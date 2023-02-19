import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ContactDetails } from "./Features/ContactDetails";
import RequestDetails from "./Features/RequestDetails";

// styles
import "./Order.scss";

//icons
import { GiStairsCake as CakeIcon } from "react-icons/gi";
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { ProductCategories } from "../../store/constants/Enums";
import emailjs from "@emailjs/browser";
import { action } from "mobx";

interface IOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Order extends React.Component<IOrderProps, {}> {
    //main
    private updateCategoryStyle = (name: ProductCategories) => {
        const category = this.props.store!.CategoryStore.category;
        let style = {};
        return category === name
            ? (style = {
                  borderBottom: "4px solid black",
              })
            : (style = {});
    };

    private sendOrder = action(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            const {
                CakeStore,
                CupcakeStore,
                UserStore,
                CookieStore,
                CategoryStore,
            } = this.props.store!;
            let templateParams;
            const category = CategoryStore.category;
            const cakeParams = {
                // CONTACT INFO
                category: category,
                name: `${UserStore.firstName} ${UserStore.lastName}`,
                email: UserStore.email,
                phone: "", // TODO: create state for phone number

                // BASE
                size: CakeStore.base.size,
                serves: CakeStore.base.serves,
                shape: CakeStore.base.shape,
                tier: CakeStore.base.tier,

                // FLAVORS
                flavor: CakeStore.flavors.flavor,
                frosting: CakeStore.flavors.frosting,
                filling: CakeStore.flavors.filling,
                fruit: CakeStore.flavors.fruit,

                // DETAILS
                date: CakeStore.details.arrivalDate,
                occasion: CakeStore.details.occasion,
                deliveryOption: CakeStore.details.deliveryOption,
                recipient: CakeStore.details.recipient,
                colors: CakeStore.details.preferredColors,
                inscription: CakeStore.details.inscription,
                photo: CakeStore.details.photoExample,
                link: CakeStore.details.linkExample,
                additionalDetails: CakeStore.details.additionalDetails,
            };
            const cupcakeParams = {
                // CONTACT INFO
                category: category,
                name: `${UserStore.firstName} ${UserStore.lastName}`,
                email: UserStore.email,
                phone: "", // TODO: create state for phone number

                // BASE
                size: CupcakeStore.base.size,
                serves: CupcakeStore.base.serves,
                quantity: CupcakeStore.base.quantity,

                // FLAVORS
                flavor: CupcakeStore.flavors.flavor,
                frosting: CupcakeStore.flavors.frosting,

                // DETAILS
                date: CupcakeStore.details.arrivalDate,
                occasion: CupcakeStore.details.occasion,
                deliveryOption: CupcakeStore.details.deliveryOption,
                recipient: CupcakeStore.details.recipient,
                colors: CupcakeStore.details.preferredColors,
                inscription: CupcakeStore.details.inscription,
                photo: CupcakeStore.details.photoExample,
                link: CupcakeStore.details.linkExample,
                additionalDetails: CupcakeStore.details.additionalDetails,
            };
            const cookieParams = {
                // CONTACT INFO
                category: category,
                name: `${UserStore.firstName} ${UserStore.lastName}`,
                email: UserStore.email,
                phone: "", // TODO: create state for phone number

                // BASE
                size: CookieStore.base.size,
                serves: CookieStore.base.serves,
                quantity: CookieStore.base.quantity,

                // FLAVORS
                flavor: CookieStore.flavors.flavor,
                frosting: CookieStore.flavors.frosting,

                // DETAILS
                date: CookieStore.details.arrivalDate,
                occasion: CookieStore.details.occasion,
                deliveryOption: CookieStore.details.deliveryOption,
                recipient: CookieStore.details.recipient,
                colors: CookieStore.details.preferredColors,
                inscription: CookieStore.details.inscription,
                photo: CookieStore.details.photoExample,
                link: CookieStore.details.linkExample,
                additionalDetails: CookieStore.details.additionalDetails,
            };
            if (category === ProductCategories.CAKES) {
                templateParams = cakeParams;
            } else if (category === ProductCategories.CUPCAKES) {
                templateParams = cupcakeParams;
            } else {
                templateParams = cookieParams;
            }

            emailjs
                .send(
                    "service_xy138l8",
                    "template_qtym3op",
                    templateParams,
                    "340q1bfh33iywOzBH"
                )
                .then(
                    (result: { text: any }) => {
                        console.log(result.text);
                    },
                    (error: { text: any }) => {
                        console.log(error.text);
                    }
                );
        }
    );

    render() {
        return (
            <section className="order-container">
                <div className="order-icon-container">
                    <div
                        style={this.updateCategoryStyle(
                            ProductCategories.CAKES
                        )}
                        className="icon-btn"
                    >
                        <span className="icon-btn-label">Cake</span>
                        <CakeIcon />
                    </div>
                    <div
                        style={this.updateCategoryStyle(
                            ProductCategories.CUPCAKES
                        )}
                        className="icon-btn"
                    >
                        <span className="icon-btn-label">Cupcake</span>
                        <CupcakeIcon />
                    </div>
                    <div
                        style={this.updateCategoryStyle(
                            ProductCategories.COOKIES
                        )}
                        className="icon-btn"
                    >
                        <span className="icon-btn-label">Cookie</span>
                        <CookieIcon />
                    </div>
                </div>
                <div className="component-container">
                    <ContactDetails />
                    <RequestDetails />
                </div>
                <div className="send-order-btn">
                    <button onClick={(e) => this.sendOrder(e)}>
                        <h5>Send Order</h5>
                    </button>
                </div>
            </section>
        );
    }
}

export default Order;

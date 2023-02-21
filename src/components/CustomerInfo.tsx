import { action } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import "./CustomerInfo.scss";

interface ICustomerInfoProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CustomerInfo extends React.Component<ICustomerInfoProps> {
    private handleUserInput = action(
        (
            e: React.ChangeEvent<HTMLInputElement>,
            value: "firstName" | "lastName" | "email" | "phone"
        ) => {
            this.props.store!.UserStore[value] = e.target.value;
            console.log(`${value}: ${this.props.store!.UserStore[value]}`);
        }
    );
    render() {
        const firstName = this.props.store!.UserStore.firstName;
        const lastName = this.props.store!.UserStore.lastName;
        const email = this.props.store!.UserStore.email;
        const phone = this.props.store!.UserStore.phone;
        return (
            <section className="base-cake-base-container">
                <h3>Your Details</h3>
                <div className="contact-info-container">
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            onChange={(e) =>
                                this.handleUserInput(e, "firstName")
                            }
                            defaultValue={firstName}
                            className="contact-input"
                            name="firstName"
                        />
                    </div>
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            Last Name
                        </label>
                        <input
                            onChange={(e) =>
                                this.handleUserInput(e, "lastName")
                            }
                            defaultValue={lastName}
                            className="contact-input"
                            name="lastName"
                        />
                    </div>
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            Email Address
                        </label>
                        <input
                            onChange={(e) => this.handleUserInput(e, "email")}
                            defaultValue={email}
                            className="contact-input"
                            name="email"
                        />
                    </div>
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            Phone Number
                        </label>
                        <input
                            onChange={(e) => this.handleUserInput(e, "phone")}
                            defaultValue={phone}
                            className="contact-input"
                            name="email"
                            type="tel"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default CustomerInfo;

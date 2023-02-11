import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import "../styles/ComponentStyles/CustomerInfo.scss";
import { Form, minLength, required } from "./Form";

interface ICustomerInfoProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CustomerInfo extends React.Component<ICustomerInfoProps> {
    render() {
        return (
            <section className="base-cake-base-container">
                <h3>Your Details</h3>
                <div className="contact-info-container">
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            First Name
                        </label>
                        <input className="contact-input" name="firstName" />
                    </div>
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            Last Name
                        </label>
                        <input className="contact-input" name="lastName" />
                    </div>
                    <div className="input-field">
                        <label className="contact-label" htmlFor="firstName">
                            Email Address
                        </label>
                        <input className="contact-input" name="email" />
                    </div>
                </div>
            </section>
        );
    }
}

export default CustomerInfo;

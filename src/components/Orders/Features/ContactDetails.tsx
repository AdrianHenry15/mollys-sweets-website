import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { inject, observer } from "mobx-react";
import "./OrderFeatures.scss";

interface IContactDetails {
    store?: GlobalStateStore;
}
@inject("store")
@observer
export class ContactDetails extends React.Component<IContactDetails> {
    render() {
        const { UserStore } = this.props.store!;
        return (
            <section className="order-form-container">
                <div className="order-form-header">
                    <span className="weighted-label">Contact Details</span>
                    <BiDotsVerticalRounded className="details-icon" />
                </div>
                <div className="contact-info">
                    <span className="weighted-label">{`${UserStore.firstName} ${UserStore.lastName}`}</span>
                    <span>{`${UserStore.email}`}</span>
                </div>
                <div className="send-message-btn">
                    <h5>Send Message</h5>
                </div>
            </section>
        );
    }
}

export default ContactDetails;

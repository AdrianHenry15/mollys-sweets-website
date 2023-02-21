import React from "react";
import { GlobalStateStore } from "../../../store/GlobalStateStore";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { inject, observer } from "mobx-react";
import "./OrderFeatures.scss";
import EditComponent from "./EditComponent";

interface IContactDetailsProps {
    store?: GlobalStateStore;
}

interface IContactDetailsState {
    toggleDropdown: boolean;
}
@inject("store")
@observer
export class ContactDetails extends React.Component<
    IContactDetailsProps,
    IContactDetailsState
> {
    constructor(props: IContactDetailsProps) {
        super(props);

        this.state = {
            toggleDropdown: false,
        };
    }

    toggleDropdownState = () => {
        this.setState({
            toggleDropdown: !this.state.toggleDropdown,
        });
    };

    render() {
        const { UserStore } = this.props.store!;
        return (
            <form id="order-form" className="order-form-container">
                <div className="order-form-header">
                    <span className="weighted-label">
                        Contact Details
                        <EditComponent
                            toggleDropdown={this.state.toggleDropdown}
                        />
                    </span>

                    <BiDotsVerticalRounded
                        onClick={() => this.toggleDropdownState()}
                        className="details-icon"
                    />
                </div>
                <div className="contact-info">
                    <span
                        id="order-form"
                        className="weighted-label"
                    >{`${UserStore.firstName} ${UserStore.lastName}`}</span>
                    <i>{`${UserStore.email}`}</i>
                    <i>{`${UserStore.phone}`}</i>
                </div>
            </form>
        );
    }
}

export default ContactDetails;

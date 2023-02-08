import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import "../styles/ComponentStyles/Login.scss";
import { Form, minLength, required } from "./Form";

interface ICustomerInfoProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
export class CustomerInfo extends React.Component<ICustomerInfoProps> {
    // handleFirstNameInput = action((e: React.ChangeEvent<HTMLInputElement>) => {
    //     let select: HTMLInputElement = e.currentTarget;
    //     let value: string = select.value;
    //     this.props.store!.UserStore.firstName = value;
    // });
    // handleLastNameInput = action((e: React.ChangeEvent<HTMLInputElement>) => {
    //     let select: HTMLInputElement = e.currentTarget;
    //     let value: string = select.value;
    //     this.props.store!.UserStore.lastName = value;
    // });
    // handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let select: HTMLInputElement = e.currentTarget;
    //     let value: string = select.value;
    //     this.props.store!.UserStore.email = value;
    // };
    render() {
        const firstName = this.props.store!.UserStore.firstName;
        const lastName = this.props.store!.UserStore.lastName;
        const email = this.props.store!.UserStore.email;

        return (
            <section className="login-container">
                <div className="login-header">
                    {/* LOGO */}
                    <aside> Be Sweet And Sign In </aside>
                </div>
                <Form
                    defaultValues={{
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                    }}
                    validationRules={{
                        email: { validator: required },
                        first_name: [
                            { validator: required },
                            { validator: minLength, arg: 2 },
                        ],
                        last_name: [
                            { validator: required },
                            { validator: minLength, arg: 2 },
                        ],
                    }}
                >
                    <Form.Field name="first_name" label="First Name" />
                    <Form.Field name="last_name" label="Last Name" />
                    <Form.Field name="email" label="Email Address" />
                </Form>
                {/* <div className="login-forms">
                    <div className="login-form">
                        <label
                            placeholder="First Name"
                            htmlFor="first-name"
                            className="first-name-label"
                        >
                            First Name
                        </label>
                        <input
                            onChange={(e) => this.handleFirstNameInput(e)}
                            className="first-name-input"
                            type="text"
                            name="first-name"
                        />
                    </div>

                    <form className="login-form">
                        <label
                            placeholder="Last Name"
                            htmlFor="last-name"
                            className="name-label"
                        >
                            Last Name
                        </label>
                        <input
                            onChange={(e) => this.handleLastNameInput(e)}
                            className="last-name-input"
                            type="text"
                            name="last-name"
                        />
                    </form>
                    <div className="login-form">
                        <label
                            placeholder="Email"
                            htmlFor="email"
                            className="name-label"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => this.handleEmailInput(e)}
                            className="name-input"
                            type="email"
                            name="email"
                        />
                    </div>
                </div> */}
            </section>
        );
    }
}

export default CustomerInfo;

import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { Form } from "./Form";

interface ICustomerInfoProps {
    store?: GlobalStateStore;
}

class CustomerInfo extends React.Component<ICustomerInfoProps> {
    render() {
        // state actions
        // const handleFirstNameInput =
        //     this.props.store!.UserActions.handleFirstNameInput;
        // const handleLastNameInput =
        //     this.props.store!.UserActions.handleLastNameInput;
        // const handleEmailInput = this.props.store!.UserActions.handleEmailInput;
        return (
            <>
                <section className="login-container">
                    <div className="login-header">
                        {/* LOGO */}
                        {/* Welcome Label */}
                        <span>Get Sweet With Your Treats</span>
                        {/* Side Note */}
                        <aside> Be Sweet And Sign In </aside>
                    </div>
                    <div>
                        <Form
                            defaultValues={{
                                first_name: "",
                                last_name: "",
                                email: "",
                            }}
                        >
                            <Form.Field name="first_name" label="First Name" />
                            <Form.Field name="last_name" label="Last Name" />
                            <Form.Field
                                name="email"
                                label="Your Email Address"
                                type="Email"
                            />
                        </Form>
                    </div>
                    {/* <div className="login-forms">
                        <form action="">
                            <label
                                placeholder="First Name"
                                htmlFor="first-name"
                                className="first-name-label"
                            >
                                First Name
                            </label>
                            <input
                                // onChange={(e) => handleFirstNameInput(e)}
                                className="first-name-input"
                                type="text"
                                name="first-name"
                            />
                        </form>
                        <form action="">
                            <label
                                placeholder="Last Name"
                                htmlFor="last-name"
                                className="info-label"
                            >
                                Last Name
                            </label>
                            <input
                                // onChange={(e) => handleLastNameInput(e)}
                                className="last-name-input"
                                type="text"
                                name="info-name"
                            />
                        </form>
                        <form action="">
                            <label
                                placeholder="Email"
                                htmlFor="email"
                                className="info-label"
                            >
                                Email
                            </label>
                            <input
                                // onChange={(e) => handleEmailInput(e)}
                                className="email-input"
                                type="text"
                                name="email"
                            />
                        </form>
                    </div> */}
                </section>
            </>
        );
    }
}

export default CustomerInfo;

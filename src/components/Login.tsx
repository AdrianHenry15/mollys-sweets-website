import { action } from "mobx";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import "../styles/ComponentStyles/Login.scss";

interface ILoginProps {
    store?: GlobalStateStore;
}

class Login extends React.Component<ILoginProps> {
    handleFirstNameInput = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.UserStore.firstName = value;
    });
    handleLastNameInput = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.UserStore.lastName = value;
    });
    handleEmailInput = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;
        this.props.store!.UserStore.email = value;
    });
    render() {
        // state actions

        return (
            <section className="login-container">
                <div className="login-header">
                    {/* LOGO */}
                    <aside> Be Sweet And Sign In </aside>
                </div>
                <div className="login-forms">
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

                    <div className="login-form">
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
                    </div>
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
                </div>
            </section>
        );
    }
}

export default Login;

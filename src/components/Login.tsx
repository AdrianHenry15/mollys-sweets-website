import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";

interface ILoginProps {
    store?: GlobalStateStore;
}

class Login extends React.Component<ILoginProps> {
    render() {
        // state actions
        const handleFirstNameInput =
            this.props.store!.UserActions.handleFirstNameInput;
        const handleLastNameInput =
            this.props.store!.UserActions.handleLastNameInput;
        const handleEmailInput = this.props.store!.UserActions.handleEmailInput;
        return (
            <section className="login-container">
                <div className="login-header">
                    {/* LOGO */}
                    {/* Welcome Label */}
                    <span>Get Sweet With Your Treats</span>
                    {/* Side Note */}
                    <aside> Be Sweet And Sign In </aside>
                </div>
                <div className="login-forms">
                    <form action="">
                        <label
                            placeholder="First Name"
                            htmlFor="first-name"
                            className="first-name-label"
                        >
                            First Name
                        </label>
                        <input
                            onChange={(e) => handleFirstNameInput(e)}
                            className="first-name-input"
                            type="text"
                            name="first-name"
                        />
                    </form>
                    <form action="">
                        <label
                            placeholder="Last Name"
                            htmlFor="email"
                            className="email-label"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => handleLastNameInput(e)}
                            className="last-name-input"
                            type="text"
                            name="last-name"
                        />
                    </form>
                    <form action="">
                        <label
                            placeholder="Email"
                            htmlFor="email"
                            className="email-label"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => handleEmailInput(e)}
                            className="email-input"
                            type="text"
                            name="email"
                        />
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;

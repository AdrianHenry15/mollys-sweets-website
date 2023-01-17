//frameworks
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//styles
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

//store
import { Provider } from "mobx-react";
import { GlobalStateStore } from "./stateStore/GlobalStateStore";

//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={GlobalStateStore}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

serviceWorkerRegistration.register();

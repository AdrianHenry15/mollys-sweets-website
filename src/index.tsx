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
import { globalStore } from "./stateStore/GlobalStateStore";
import { Provider } from "mobx-react";

//store

//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={globalStore}>
                <App store={globalStore} />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

serviceWorkerRegistration.register();

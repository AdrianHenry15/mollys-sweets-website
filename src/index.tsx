//frameworks
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//styles
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import App from "./App";

//store
import { Provider } from "mobx-react";
import { RootStore } from "./store/store";

const fetcher = (url: any) =>
    window.fetch(url).then((response) => response.json());
const store = RootStore.create(
    {},
    {
        fetch: fetcher,
        alert: (m: any) => console.log(m), // Noop for demo: window.alert(m)
    }
);

//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

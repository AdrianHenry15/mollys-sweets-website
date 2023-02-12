//styles
import "./App.scss";
//frameworks
import React, { Component } from "react";
//components
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cupcakes from "./pages/Cupcakes";
import Cookies from "./pages/Cookies";
import Cakes from "./pages/Cakes";
import Footer from "./components/Footer";
import SampleOurSweets from "./pages/ScanOurSweets";
import ChooseYourSweets from "./pages/ChooseYourSweets";
import BuildYourCake from "./features/CakeBuild/Main";
import ChooseYourCupcakes from "./features/CupcakeBuild/Main";
import ChooseYourCookies from "./features/CookieBuild/Main";
import { GlobalStateStore } from "./store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import Cart from "./components/Cart/Cart";
import { ProductCategories } from "./store/constants/Enums";
import CustomerInfo from "./components/CustomerInfo";
import { ISubmitResult, IValues } from "./components/Form";

interface IAppProps {
    store: GlobalStateStore;
}

@inject("store")
@observer
class App extends Component<IAppProps, {}> {
    private wait = (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        await this.wait(1000); // simulate asynchronous web API call
        return {
            errors: {
                email: ["Some is wrong with this"],
            },
            success: false,
        };
    };
    render() {
        return (
            <div className="app snow">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/sample-our-sweets"
                        element={<SampleOurSweets />}
                    ></Route>

                    <Route
                        path="/choose-your-sweets"
                        element={<ChooseYourSweets />}
                    ></Route>

                    {ProductCategories.CAKES && (
                        <Route
                            path="/build-your-cake"
                            element={<BuildYourCake />}
                        ></Route>
                    )}
                    {ProductCategories.CUPCAKES && (
                        <Route
                            path="/choose-your-cupcakes"
                            element={<ChooseYourCupcakes />}
                        ></Route>
                    )}
                    {ProductCategories.COOKIES && (
                        <Route
                            path="/choose-your-cookies"
                            element={<ChooseYourCookies />}
                        ></Route>
                    )}
                    <Route path="/cakes" element={<Cakes />}></Route>
                    <Route path="/cookies" element={<Cookies />}></Route>
                    <Route path="/cupcakes" element={<Cupcakes />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/login" element={<CustomerInfo />}></Route>
                    <Route path="/*" element={<PageNotFound />}></Route>
                </Routes>
                <Footer />
            </div>
        );
    }
}
export default App;

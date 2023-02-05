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
import BuildYourCake from "./pages/CakeBuild/Main";
import ChooseYourCupcakes from "./pages/CupcakeBuild/Main";
import ChooseYourCookies from "./pages/CookieBuild/Main";
import { GlobalStateStore } from "./store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import Cart from "./components/Cart/Cart";
import { ProductCategories } from "./store/constants/Enums";
import CustomerInfo from "./components/CustomerInfo";
import OrderComplete from "./components/Orders/OrderComplete";
import ComingSoon from "./components/ComingSoon";

interface IAppProps {
    store: GlobalStateStore;
}

@inject("store")
@observer
class App extends Component<IAppProps, {}> {
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

                    <Route
                        path="/customer-info"
                        element={<CustomerInfo />}
                    ></Route>

                    <Route
                        path="/order-complete"
                        element={<OrderComplete />}
                    ></Route>

                    <Route path="/*" element={<PageNotFound />}></Route>
                </Routes>
                <Footer />
            </div>
        );
    }
}
export default App;

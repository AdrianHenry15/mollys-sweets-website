import "./App.scss";
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
import ChooseYourCookies from "./pages/ChooseYourCookies";
import ChooseYourCupcakes from "./pages/ChooseYourCupcakes";
import BuildYourCake from "./pages/BuildYourCake/BuildYourCake";

const App = () => {
    return (
        <body className="app snow">
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
                <Route
                    path="/build-your-cake"
                    element={<BuildYourCake />}
                ></Route>
                <Route
                    path="/choose-your-cupcakes"
                    element={<ChooseYourCupcakes />}
                ></Route>
                <Route
                    path="/choose-your-cookies"
                    element={<ChooseYourCookies />}
                ></Route>
                <Route path="/cakes" element={<Cakes />}></Route>
                <Route path="/cookies" element={<Cookies />}></Route>
                <Route path="/cupcakes" element={<Cupcakes />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
            <Footer />
        </body>
    );
};

export default App;

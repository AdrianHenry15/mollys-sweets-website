import "./App.scss";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cupcakes from "./pages/Cupcakes";
import Cookies from "./pages/Cookies";
import Cakes from "./pages/Cakes";
import Footer from "./components/Footer";
import SampleOurSweets from "./pages/SampleOurSweets";

function App() {
    return (
        <div className="app snow">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/sample-our-sweets"
                    element={<SampleOurSweets />}
                ></Route>
                <Route path="/cakes" element={<Cakes />}></Route>
                <Route path="/cookies" element={<Cookies />}></Route>
                <Route path="/cupcakes" element={<Cupcakes />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

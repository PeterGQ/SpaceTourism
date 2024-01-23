//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Station } from "./components/Station";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Shop } from "./pages/shop/shop";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/checkout/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopContextProvider } from "./context/shopMath";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/flights" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

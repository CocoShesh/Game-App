import Home from "./components/Home";
import Categories from "./pages/categories/Categories";
import Slider from "./components/carousel/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideMenu from "./components/sidebar/SideMenu";
import Bahay from "./pages/home/Bahay";
import MyLibrary from "./pages/Library/MyLibrary";
import { CartProvider } from "./CartContext";
import Bag from "./pages/bag/Bag";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Bahay />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/MyLibrary" element={<MyLibrary />} />
            <Route path="/add-to-cart" element={<Bag />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

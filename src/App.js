import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Admin from "./Pages/Admin";
import Product from "./component/Product/Product";
import AddProduct from "./component/AddProduct/AddProduct";
import LayoutAdmin from "./LayoutAdmin";
import Update from "./component/Update/Update";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Admin />} />
        <Route path="/admin/products" element={<Product />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/product/:id" element={<Update />} />
      </Route>
    </Routes>
  );
};

export default App;

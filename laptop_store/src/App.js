import "./CSS/style.css";
import Home from "./PageComponents/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarUnlogged from "./PageComponents/NavBarUnlogged";
import Footer from "./PageComponents/Footer";
import Laptop from "./PageComponents/Laptop";
import CategoryList from "./PageComponents/CategoryList";
import Login from "./PageComponents/Login";
import Registration from "./PageComponents/Registration";
import Orders from "./PageComponents/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarUnlogged/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/laptop/:id" element={<Laptop />} />
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

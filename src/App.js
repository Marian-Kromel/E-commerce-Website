import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          {/* <SignUp /> */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/product/:id" element={<ProductSingle />} />{" "}
            <Route path="/category/:category" element={<CategoryProduct />} />
            <Route path="/cart" element={<Cart />} />{" "}
            <Route path="/search/:searchTerm" element={<Search />} />{" "}
            <Route exact path="/SignUp" element={<SignUp />}></Route>
            <Route exact path="/LogIn" element={<LogIn />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>{" "}
      </Provider>{" "}
    </div>
  );
}

export default App;

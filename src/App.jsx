import Cart from "./pages/Cart";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import ProductList from "../src/pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/product" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </Provider>
    </div>
  );
};

export default App;

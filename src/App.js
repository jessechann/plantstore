import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import CartModal from "./components/CartModal";

function App() {
  return (
    <div className="App">
      <CartModal Cart={Cart} />
      <Header />
      <div className="Main">
        <Switch>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

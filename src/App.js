import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { CartContext, ProductsContext } from "./contexts/CartContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={cart}>
    <ProductsContext.Provider value={products}>
      <div className="App">
        <Navigation/>

        {/* Routes */}
        <Route
          exact
          path="/"
          render={() => <Products addItem={addItem} />}
        />

        <Route path="/cart" render={() => <ShoppingCart/>} />
      </div>
    </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

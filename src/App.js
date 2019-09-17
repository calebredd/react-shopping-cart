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
  const removeItem = itemId => {
    // console.log(itemId);
    // console.log(cart.filter(item => item.id != itemId));
    setCart(cart.filter(item => item.id != itemId));
    // console.log(cart);
    
  };
  return (
    <CartContext.Provider value={cart}>
      <ProductsContext.Provider value={products}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/" render={() => <Products addItem={addItem} />} />

          <Route
            path="/cart"
            render={() => <ShoppingCart removeItem={removeItem} />}
          />
        </div>
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

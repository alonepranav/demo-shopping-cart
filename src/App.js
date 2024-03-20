import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import { Toaster } from "react-hot-toast";
import { createContext, useState } from 'react';
import { toast } from "react-hot-toast";


export const data = createContext();

function App() {

  const [cartProducts, setcartProducts] = useState([])

  const addToCart = (obj) => {

    let element = cartProducts.find((i) => {
      return i.id === obj.id;
    });

    if (element === undefined) {
      setcartProducts([...cartProducts, { ...obj, qty: 1 }]);
    } else {
      let ind = cartProducts.indexOf(element)
      let temp = [
        ...cartProducts
      ]
      temp[ind] = { ...temp[ind], qty: temp[ind].qty + 1 };
      setcartProducts(temp);
    }

    toast.success("Item Added to Cart");
  };


  const increment = (id) => {
    let index = cartProducts.indexOf(cartProducts.find(item => item.id === id));
    let temp = [
      ...cartProducts
    ]
    temp[index] = { ...temp[index], qty: temp[index].qty + 1 };
    setcartProducts(temp);
  }

  const decrement = (id) => {
    let index = cartProducts.indexOf(cartProducts.find(item => item.id === id));
    if (cartProducts[index].qty > 1) {
      let temp = [
        ...cartProducts
      ]
      temp[index] = { ...temp[index], qty: temp[index].qty - 1 };
      setcartProducts(temp);
    }
  }

  const deleteItem = (id) => {
    setcartProducts(cartProducts.filter((item) => item.id !== id));
    toast.error("Item Removed From Cart")
  }

  return (
    <div className="App">
      <data.Provider value={cartProducts}>
        <Router>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home addToCart={addToCart} />}></Route>
            <Route path={"/cart"} element={<Cart {...{ increment, decrement, deleteItem }} />}></Route>
          </Routes>
          <Toaster />
        </Router>
      </data.Provider>
    </div>
  );
}

export default App;

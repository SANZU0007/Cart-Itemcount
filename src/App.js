import React, { useState } from "react";
import "./App.css";

const data = [
  {
    Productimage:
      "https://th.bing.com/th/id/OIP.y_H4qR8ILFTsn6Ctft-VhwHaFt?w=234&h=181&c=7&r=0&o=5&pid=1.7",
    productName: "DELL",
    Productprice: 5000,
    id: 1,
  },
  {
    Productimage:
      "https://th.bing.com/th/id/OIP.y_H4qR8ILFTsn6Ctft-VhwHaFt?w=234&h=181&c=7&r=0&o=5&pid=1.7",
    productName: "DELL",
    Productprice: 5000,
    id: 1,
  },
  {
    productName: "DELL",
    Productprice: 5000,
    id: 1,
  },
  {
    productName: "DELL",
    Productprice: 5000,
    id: 1,
  },
  {
    productName: "DELL",
    Productprice: 5000,
    id: 1,
  },
  // ...rest of the data array
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Cart {cartCount}</h1>
      </div>
      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            productName={prod.productName}
            Productprice={prod.Productprice}
            cartCount={cartCount}
            setCartCount={setCartCount}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ productName, Productprice, cartCount, setCartCount }) {
  const [show, setShow] = useState(true);

  const handleAddBtn = () => {
    setShow(false);
    setCartCount(cartCount + 1);
  };

  const handleRemoveBtn = () => {
    setShow(true);
    setCartCount(cartCount - 1);
  };

  return (
    <div className="card">
      <div>
        <h3>{productName}</h3>
        <h2>$ {Productprice}</h2>
      </div>
      {show ? (
        <button onClick={handleAddBtn}>Add to Cart</button>
      ) : (
        <button onClick={handleRemoveBtn}>Remove from Cart</button>
      )}
    </div>
  );
}

export default App;

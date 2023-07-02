import React, { useState } from "react";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegThumbsUp  } from "react-icons/fa";


const data = [
  {
    Productimage:
      "https://th.bing.com/th/id/OIP.y_H4qR8ILFTsn6Ctft-VhwHaFt?w=234&h=181&c=7&r=0&o=5&pid=1.7",
    productName: "DELL",
    Productprice: 5000,
    
    fancyproducts :"fancy item",
    id:1,
  },
  {
    Productimage:
      "https://th.bing.com/th/id/OIP.y_H4qR8ILFTsn6Ctft-VhwHaFt?w=234&h=181&c=7&r=0&o=5&pid=1.7",
    productName: "DELL",
    Productprice: 5000,
    fancyproducts :"special item",
    id: 2,
    
  },
  {
    productName: "DELL",
    Productprice: 5000,
    fancyproducts :"popuar item",
    id: 3,
   
  },
  {
    productName: "DELL",
    Productprice: 5000,
    fancyproducts:"sale",
    id: 4,
  },
  {
    productName: "DELL",
    Productprice: 5000,
    fancyproducts :"offer",
    id: 1,
  
  },
  // ...rest of the data array
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav>
        <span className="logo">shop</span>
        <ul className="nav-list">
          <li >Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
        <button className="cart-count">  <FaRegThumbsUp /> Cart <span>{cartCount}</span></button>
      </nav>
      </header>
      <div className="banner">
        <h1>Shop in style</h1>
        <h3>with this shop homepage template</h3>
      </div>
        
      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            productName={prod.productName}
            Productprice={prod.Productprice}
            fancyproducts ={prod.fancyproducts}
            cartCount={cartCount}
            setCartCount={setCartCount}
            key={prod.id}
          />
          
        ))}
        
      </div>
      <footer>
        <p>copy right your webside 2023</p>
      </footer>
    </div>
   
  );
}

function ProductCard({ productName, Productprice,fancyproducts, cartCount, setCartCount }) {
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
        
        <h1 className="fancy">{fancyproducts}</h1>
        <h2>$ {Productprice}</h2>
      </div>
      {show ? (
        <button className="card-btn" onClick={handleAddBtn}>Add to Cart</button>
      ) : (
        <button className="card-btn" onClick={handleRemoveBtn}>Remove from Cart</button>
      )}
    </div>
  );
}

export default App;
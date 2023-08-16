import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegThumbsUp } from "react-icons/fa";
const data = [
  {
    Productimage: "https://www.josalukkasonline.com/Media/original_jos-alukkas-Gold-Earring--JAOV1C-nfkL.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "limited edition",
    id: 1,
  },
  {
    Productimage: "https://5.imimg.com/data5/ED/FJ/MY-25145439/png-top0007602-vertical-mani-tops-500x500.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "avilable",
    id: 2,
  },
  {
    Productimage: "https://5.imimg.com/data5/OE/IV/MY-25145439/fancy-zumke.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "popular item",
    id: 3,
  },
  {
    Productimage:" https://www.canmorecrossing.ca/wp-content/uploads/2023/05/gold-jhumka-332zvr-1.jpg",
    productName: "Gold",
    Productprice: 3000,
    fancyproducts: "No stack",
    id: 4,
  },
  {
    Productimage: "https://cdn1.jewelxy.com/live/img/business_product/300x300/SjBMUrF9T6_20220624155047.jpg",
    productName: "Gold",
    Productprice: 4000,
    fancyproducts: "No stack",
    id: 5,
  },
  {
    Productimage: "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/ER14854939PNG_01.png",
    productName: "Gold",
    Productprice: 2000,
    fancyproducts: "No stack",
    id: 6,
  },
  {
    Productimage: "https://5.imimg.com/data5/ED/FJ/MY-25145439/png-top0007602-vertical-mani-tops-500x500.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "avilable",
    id: 2,
  },
  {
    Productimage: "https://5.imimg.com/data5/ED/FJ/MY-25145439/png-top0007602-vertical-mani-tops-500x500.png",

  productName: "Gold",
    Productprice: 5000,
    fancyproducts: "avilable",
    id: 2,
  },
  {
    Productimage: "https://5.imimg.com/data5/ED/FJ/MY-25145439/png-top0007602-vertical-mani-tops-500x500.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "avilable",
    id: 2,
  },
  {
    Productimage: " https://5.imimg.com/data5/ED/FJ/MY-25145439/png-top0007602-vertical-mani-tops-500x500.png",
    productName: "Gold",
    Productprice: 5000,
    fancyproducts: "avilable",
    id: 2,
  },
];


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <span className="logo">shop</span>
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
          </ul>
          <button className="cart-count">
            <FaRegThumbsUp /> Cart <span>{cartCount}</span>
          </button>
        </nav>
      </header>
      <div className="banner">
        <p>Shop in style</p>
        <p>with this shop homepage template</p>
      </div>

      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            Productimage={prod.Productimage}
            productName={prod.productName}
            Productprice={prod.Productprice}
            fancyproducts={prod.fancyproducts}
            cartCount={cartCount}
            setCartCount={setCartCount}
            key={prod.id}
          />
        ))}
      </div>
      <footer>
        <p>copyright your website 2023</p>
      </footer>
    </div>
  );
}

function ProductCard({
  Productimage,
  productName,
  Productprice,
  fancyproducts,
  cartCount,
  setCartCount,
}) {
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
        <img src={Productimage} alt=""></img>
        
        <p>{productName}</p>
        <p className="fancy">{fancyproducts}</p>
        <p>$ {Productprice}</p>
      </div>
      {show ? (
        <button className="card-btn" onClick={handleAddBtn}>
          Add to Cart
        </button>
      ) : (
        <button className="card-btn" onClick={handleRemoveBtn}>
          Remove from Cart
        </button>
      )}   
    </div>
  );
}

export default App;

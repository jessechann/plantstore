import "./ProductDetails.css";
import { useState, useContext } from "react";
import PRODUCTSDATA from "../PRODUCTSDATA";
import { useParams } from "react-router-dom";
import { Context } from "../CartContext";

export default function ProductDetails(props) {
  const { addToCart, handleOpenCart } = useContext(Context);
  const { productId } = useParams();
  const [cartText, setCartText] = useState("Add to Cart");

  const thisProduct = PRODUCTSDATA.find((item) => item.id == productId);

  function handleClick(id) {
    addToCart(id);
    setCartText("Added to Cart");
    handleOpenCart();
  }

  return (
    <>
      <div className="productContainer">
        <div className="productDisplay">
          <img
            src={require(`../assets/${thisProduct.img}`).default}
            alt={thisProduct.name}
          />
        </div>
        <div className="productDescription">
          <div className="subheader">
            <h2 className="">{thisProduct.name}</h2>
            <h2 className="price">${thisProduct.price}</h2>
          </div>

          <p>{thisProduct.description}</p>
          <div
            className={
              cartText === "Add to Cart" ? "checkout" : "checkout added"
            }
            onClick={() => handleClick(thisProduct.id)}
          >
            {cartText}
          </div>
        </div>
      </div>
    </>
  );
}

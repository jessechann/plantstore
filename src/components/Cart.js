import "./Cart.css";
import { useState, useContext } from "react";
import { Context } from "../CartContext";

function Cart() {
  const { cartItems, updateQty, removeFromCart } = useContext(Context);

  function calcSubtotal(total, num) {
    return total + num;
  }
  let subtotal;
  const arrayTotals = cartItems.map((item) => item.price * item.qty);
  if (cartItems.length > 0) {
    subtotal = arrayTotals.reduce(calcSubtotal);
  }

  const Qty = ({ id, qty }) => {
    const [selectQty, setSelectQty] = useState(qty);

    const handleQty = (event) => {
      setSelectQty(event.target.value);
      updateQty(id, event.target.value);
      if (event.target.value === "0") {
        removeFromCart(id);
      }
    };

    return (
      <div className="cartItemQty">
        <select value={selectQty} name="Quantity" onChange={handleQty}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
  };

  function Item({ id, name, img, price, qty }) {
    return (
      <div className="cartItem">
        <img src={require(`../assets/${img}`).default} alt="test" />

        <div className="cartItemName">
          <h4>{name}</h4>
        </div>
        <Qty id={id} qty={qty} />
        <div className="cartItemPrice">${price}</div>
      </div>
    );
  }

  const cart = cartItems.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      img={item.img}
      name={item.name}
      price={item.price}
      qty={item.qty}
    />
  ));

  function ListOfItems() {
    return (
      <>
        {cartItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        ))}
      </>
    );
  }

  function Subtotal() {
    if (cartItems.length > 0) {
      return (
        <>
          <div className="subtotal">
            <span>
              <strong>Subtotal</strong>
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="checkoutBtn">Checkout</div>
        </>
      );
    } else {
      return <div>Looks like your shopping cart is empty!</div>;
    }
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ListOfItems />
      <Subtotal />
    </div>
  );
}
export default Cart;

import useOutsideClick from "../useOutsideClick";
import { useRef, useContext } from "react";
import { Context } from "../CartContext";

function CartModal({ Cart }) {
  const { openCart, handleOpenCart } = useContext(Context);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (openCart) handleOpenCart();
  });

  return (
    <div id="myModal" className={openCart ? "modal open" : "modal"}>
      <div className="modal-content" ref={ref}>
        <div className="modal-header">
          <span className="close" onClick={handleOpenCart}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default CartModal;

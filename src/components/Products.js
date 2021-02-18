import "./Products.css";
import PRODUCTSDATA from "../PRODUCTSDATA";
import { Link } from "react-router-dom";

function ProductItem({ id, img, name, price }) {
  return (
    <div className="productItem">
      <Link to={`/products/${id}`}>
        <img src={require(`../assets/${img}`).default} alt="test" />
        <div className="productText">
          <span className="productName">{name}</span>
          <span className="price">${price}</span>
        </div>
      </Link>
    </div>
  );
}

export default function Products() {
  return (
    <>
      <h2>Featured Plants</h2>
      <div className="products">
        {PRODUCTSDATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

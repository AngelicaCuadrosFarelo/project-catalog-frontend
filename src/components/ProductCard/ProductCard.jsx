import { Link } from "react-router-dom";
import "./ProductCard.css";

export function ProductCard({ id, name, price, image, category }) {
  return (
    <Link className="ProductCard" to={`/products/${id}`}>
      <img src={image} alt={`${name} image`} />
      <div className="productCard_info">
        <span>{category.name.toUpperCase()}</span>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
}

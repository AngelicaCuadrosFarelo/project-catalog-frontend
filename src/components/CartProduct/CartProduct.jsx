import "./CartProduct.css";
import { useCart } from "react-use-cart";
import { TablerTrash } from "../Icons/Icons";

export function CartProduct({ image, title, count, price, id, stock }) {
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <div className="cartProduct page">
      <img src={image} alt="imagenProduc" />
      <div className="cartProduct_content">
        <h2>{title} </h2>
        <p>${price} </p>
      </div>
      <div className="cartProduct_count">
        <div className="cartProduct_counters">
          <button onClick={() => updateItemQuantity(id, count - 1)}>-</button>
          {count}
          <button
            onClick={() => updateItemQuantity(id, count + 1)}
            disabled={count === stock}
          >
            +
          </button>
        </div>
        <button onClick={() => removeItem(id)}>
          <TablerTrash /> Eliminar
        </button>
      </div>
    </div>
  );
}

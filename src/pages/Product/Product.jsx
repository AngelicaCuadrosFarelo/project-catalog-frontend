import "./Product.css";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";
import { MdiCart } from "../../components/Icons/Icons";
import { useCart } from "react-use-cart";

export function Product() {
  const { addItem } = useCart();
  const { productId } = useParams();
  const { data, loading } = useProduct(productId);
  const [count, setCount] = useState(1);

  if (loading) {
    return <p>cargando datos...</p>;
  }
  return (
    <section className="product page">
      <div className="product_content">
        <img src={data.image} alt="imgProduct" />
        <div className="product_info">
          <div className="product_info_category">
            <span>{data.category.name.toUpperCase()} </span>
            <p>{data.sold} vendidos </p>
          </div>
          <h2>{data.name} </h2>
          <h3>$ {data.price} </h3>
          <p>{data.stock} unidades disponibles </p>
          <div className="count">
            <button onClick={() => setCount(count - 1)} disabled={count === 1}>
              -
            </button>
            {count}
            <button
              onClick={() => setCount(count + 1)}
              disabled={count === data.stock}
            >
              +
            </button>
          </div>
          <button onClick={() => addItem({ ...data, id: data._id }, count)}>
            <MdiCart /> Añadir al carrito
          </button>
        </div>
      </div>
      <div className="product_description">
        <h2>Descripción</h2>
        <p>{data.description} </p>
      </div>
    </section>
  );
}

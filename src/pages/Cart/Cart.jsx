import "./Cart.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useCart } from "react-use-cart";
import { CartProduct } from "../../components/CartProduct/CartProduct";

export function Cart() {
  const { totalItems, items, cartTotal } = useCart();

  return (
    <section className="cart page">
      <SectionTitle
        title="Carrito de Compras"
        description={`Tienes ${totalItems} productos en tú carrito`}
      />
      <div className="cart_content">
        <div className="cart_item">
          {items.map((product) => (
            <CartProduct
              key={product.id}
              image={product.image}
              title={product.name}
              count={product.quantity}
              price={product.price}
              id={product.id}
              stock={product.stock}
            />
          ))}
        </div>
        <div className="cart_pay">
          <h3>Resumen del pedido </h3>
          <p>Total $ {cartTotal} </p>
          <button>Finalizar compra</button>
        </div>
      </div>
    </section>
  );
}

import "./Cart.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useCart } from "react-use-cart";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { Link } from "react-router-dom";
import {
  MingcuteCertificateFill,
  MdiTruckCheck,
  MingcuteSafetyCertificateFill,
} from "../../components/Icons/Icons";

const whatsapp = "573226127460";

export function Cart() {
  const { totalItems, items, cartTotal, isEmpty } = useCart();

  const handleShopping = () => {
    const products = items
      .map((item) => {
        const { name, quantity, price } = item;
        return `* ${name} (x${quantity}): $${quantity * price}`;
      })
      .join("\n");
    const message = `*🛒 Nuevo pedido*
    *🛍️ Productos:*\n${products}
    *💵 Total:* $${cartTotal}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="cart page">
      <SectionTitle
        title="Tu carrito"
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
          <hr />
          <p>
            Total <span>$ {cartTotal}</span>
          </p>

          <button onClick={handleShopping} disabled={isEmpty}>
            Finalizar compra
          </button>
          <Link
            to={{
              pathname: "/",
              search: "?page=1&limit=20&search=&category=",
            }}
          >
            Seguir comprando
          </Link>
          <hr />
          <div className="cart_pay-info">
            <div className="cart_pay-infoBox">
              <span>
                <MingcuteCertificateFill width={25} height={25} />
              </span>
              Calidad garantízada
            </div>
            <div className="cart_pay-infoBox">
              <span>
                <MdiTruckCheck width={25} height={25} />
              </span>
              Envío incluido
            </div>
            <div className="cart_pay-infoBox">
              <span>
                <MingcuteSafetyCertificateFill width={25} height={25} />
              </span>
              Compra 100% segura
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

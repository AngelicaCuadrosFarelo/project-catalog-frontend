import { Link } from "react-router-dom";
import "./Header.css";
import { MdiCart } from "../Icons/Icons";
import { useCart } from "react-use-cart";

export function Header() {
  const { totalItems } = useCart();
  return (
    <header className="header">
      <Link to="/" className="header_logo">
        <img src="/images/logo5estrellas.jpeg" alt="logo de empresa" />
        <span>Colchones 5 Estrellas</span>
      </Link>
      <nav className="header_nav">
        <Link
          to={{
            pathname: "/products",
            search: "?page=1&limit=20&search=&category=Colchones",
          }}
        >
          Colchones
        </Link>
        <Link
          to={{
            pathname: "/products",
            search: "?page=1&limit=20&search=&category=Bases",
          }}
        >
          Bases
        </Link>
        <Link
          to={{
            pathname: "/products",
            search: "?page=1&limit=20&search=&category=Cabeceros",
          }}
        >
          Cabeceros
        </Link>
      </nav>
      <Link to="/cart" className="carrito">
        <MdiCart width={30} height={20} />
        <span>{totalItems} </span>
      </Link>
    </header>
  );
}

export default Header;

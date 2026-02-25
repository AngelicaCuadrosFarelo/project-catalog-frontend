import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import { MdiCart } from "../Icons/Icons";
import { useCart } from "react-use-cart";
import { FontistoNavIconA } from "../Icons/Icons";

export function Header() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/products",
      search: `?page=1&limit=20&search=${encodeURIComponent(search)}&category=`,
    });
  };

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

      <form className="header_search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <Link to="/cart" className="carrito">
        <MdiCart width={30} height={20} />
        <span>{totalItems} </span>
      </Link>
      <button className="header_menu">
        <FontistoNavIconA width={25} height={25} />
      </button>
    </header>
  );
}

export default Header;

import "./Footer.css";
import { Link } from "react-router-dom";
import {
  LogosWhatsappIcon,
  SkillIconsInstagram,
  LogosFacebook,
} from "../Icons/Icons";

const whatsapp = "573226127460";

export function Footer() {
  return (
    <footer className="footer page">
      <div className="footer_logo">
        <img src="./images/logo5E.png" alt="" />
        <p>
          Expertos en un descanso con más de 15 años innovando en la salud del
          sueño para miles de familias.
        </p>
      </div>
      <div className="footer_info">
        <h5>Información</h5>
        <div>
          <a>Sobre nosotros</a>
          <a>Política de Envíos</a>
          <a>Garantia</a>
        </div>
      </div>

      <div className="footer_follow">
        <p>Siguenos</p>

        <div>
          <a href={`https://wa.me/${whatsapp}`} target="_blank">
            <LogosWhatsappIcon width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/colchones5estrellas?igsh=MWMwc2RzZnBqaG15Yg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <SkillIconsInstagram width={20} height={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1Da4c8gkcF/?mibextid=wwXIfr"
            target="_blank"
          >
            <LogosFacebook width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

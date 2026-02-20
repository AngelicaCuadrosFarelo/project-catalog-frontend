import { Link } from "react-router-dom";
import "./Landing.css";
import {
  MingcuteCertificateFill,
  MdiTruckCheck,
  MingcuteSafetyCertificateFill,
} from "../../components/Icons/Icons";

export function Landing() {
  return (
    <section className="landing page">
      <div className="landing_image">
        <span>COMBOS</span>
        <h2>
          El descanso que <br />
          mereces
        </h2>
        <p>
          Ingenieria del sueño avanzada para noches inolvidables.
          <br /> Descubre nuestra tecnologia de confort hibrido.
        </p>
        <Link
          to={{
            pathname: "/products",
            search: "?page=1&limit=20&search=&category=Combos",
          }}
        >
          Ver mas...
        </Link>
      </div>
      <div className="infoContainer">
        <div className="infoBox">
          <span>
            <MingcuteCertificateFill width={25} height={25} />
          </span>
          Calidad garantízada
        </div>
        <div className="infoBox">
          <span>
            <MdiTruckCheck width={25} height={25} />
          </span>
          Envío incluido
        </div>
        <div className="infoBox">
          <span>
            <MingcuteSafetyCertificateFill width={25} height={25} />
          </span>
          Compra 100% segura
        </div>
      </div>
    </section>
  );
}

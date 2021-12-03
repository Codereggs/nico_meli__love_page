import "./Fecha.css";
import FechaCards from "./FechaCards";
import { BiChurch, BiCloset } from "react-icons/bi";
import { Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Fecha = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="fechaContainer" id="fecha">
      <Typography
        variant={"h4"}
        align="center"
        style={{
          marginTop: "3rem",
          fontFamily: "Montserrat",
          paddingTop: "110px",
        }}
        data-aos="flip-left"
      >
        TE INVITAMOS A QUE NOS ACOMPAÑES EN ESTE GRAN DÍA
      </Typography>

      <FechaCards
        icono={<BiChurch className="cIcon" />}
        titulo="Ceremonia"
        localidad="Ituzaingó"
        fecha="08 de Enero del 2022 - 19:30 hrs."
        direccion="Cnel. Martiniano Chilavert 890"
        gmapsdir="https://www.google.com/maps/place/Iglesia+Cristo+Vive+y+es+Verdad/@-34.6425978,-58.6697704,15z/data=!4m5!3m4!1s0x0:0x5d7edcd75bd49588!8m2!3d-34.6425978!4d-58.6697704"
      />
      <FechaCards
        icono={<BiCloset className="cloIcon" />}
        titulo="Código de vestimenta"
        localidad="Elegante"
      />
    </section>
  );
};

export default Fecha;

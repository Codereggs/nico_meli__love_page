import "./Fecha.css";
import FechaCards from "./FechaCards";
import { BiChurch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
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
        icono={<AiOutlineHeart className="cIcon" />}
        titulo="Boda por Civil"
        fecha="3 de Diciembre del 2021 - 11:00 am (🇻🇪) / 12:00 pm (🇦🇷)"
        zoomdir="https://us05web.zoom.us/j/82569608418?pwd=Z1pjYW5FU0tSQ1Jodzc0VmRBT0ExUT09"
      />

      <FechaCards
        icono={<BiChurch className="cIcon" />}
        titulo="Ceremonia Iglesia"
        fecha="11 de Diciembre del 2021 - 03:30 pm (🇻🇪) / 04:30 pm (🇦🇷)"
        youtubedir="https://youtube.com/c/ParroquiaSantaMaria"
        zoomdir="https://us05web.zoom.us/j/82569608418?pwd=Z1pjYW5FU0tSQ1Jodzc0VmRBT0ExUT09"
      />
    </section>
  );
};

export default Fecha;

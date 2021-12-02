import { Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import regalos from "../Assets/regalosP.png";
import "./Regalos.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Regalos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const xs = useMediaQuery("(min-width:0px)");
  const md = useMediaQuery("(min-width:426px)");
  const lg = useMediaQuery("(min-width:769px)");
  const xl = useMediaQuery("(min-width:2561px)");
  let res = xl ? "h3" : lg ? "h4" : md ? "h5" : xs ? "h5" : null;
  return (
    <section className="regalos" id="regalos">
      <img
        src={regalos}
        alt="regalos"
        className="giftIcon"
        data-aos="fade-down"
      />
      <Container className="regalosC">
        <Typography variant={res} color="#f280aa" data-aos="fade-down">
          Lo más importante para nosotros es tu presencia en este día
          especial... Pero si algo gustas regalar, en efectivo lo sabremos
          apreciar.
        </Typography>
        <br />
        <Typography variant={res} color="#f280aa" data-aos="fade-down">
          CBU:
        </Typography>
        <br />
        <Typography variant={res} color="#f280aa" data-aos="fade-down">
          0140087803502354380982
        </Typography>
      </Container>
    </section>
  );
};

export default Regalos;

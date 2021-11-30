import Fecha from "./Fecha";
import Footer from "./Footer";
import Inicio from "./Inicio";
import NavBar from "./Nav";
import Regalos from "./Regalos";
import Reserva from "./Reserva";
import TeEsperamos from "./TeEsperamos";

const PaginaPresencial = () => {
  return (
    <>
      <NavBar presencial={true} />
      <Inicio />
      <Fecha />
      <Regalos />
      <Reserva />
      <TeEsperamos />
      <Footer />
    </>
  );
};

export default PaginaPresencial;

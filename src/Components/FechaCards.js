import { Button, Modal, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./Fecha.css";
import Aos from "aos";
import "aos/dist/aos.css";

const FechaCards = ({
  icono,
  titulo,
  localidad,
  fecha,
  direccion,
  gmapsdir,
  youtubedir,
  zoomdir,
  whatsappdirRafa,
  whatsappdirMary,
}) => {
  const [open, setOpen] = useState(false);
  const style = {
    colorStyle: {
      color: "#f280aa",
    },
    modalStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      textAlign: "center",
    },
    boxStyle: {
      textAlign: "center",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit",
      flexDirection: "column",
      flexWrap: "wrap",
      margin: "1rem",
    },
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="fecha" data-aos="flip-left">
      {icono}
      <Typography variant={"h3"} style={style.colorStyle} align="center">
        {titulo}
      </Typography>
      <br />
      <Typography variant={"h5"} align="center" color="secondary">
        {localidad}
      </Typography>
      <Typography variant={"h5"} align="center" color="secondary">
        {fecha}
      </Typography>
      <Typography variant={"h5"} align="center" color="secondary">
        {direccion}
      </Typography>
      <br />
      {zoomdir && (
        <Link
          href={zoomdir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">📹 Zoom</Button>
        </Link>
      )}
      <br />
      {youtubedir && (
        <Link
          href={youtubedir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">▶️ Youtube</Button>
        </Link>
      )}
      <br />
      {gmapsdir && (
        <Link
          href={gmapsdir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">📍 Como llegar</Button>
        </Link>
      )}
      <br />
      {whatsappdirMary && (
        <Link underline="none" className="fechaLink">
          <Button variant="contained" onClick={handleOpen}>
            📞 Confirmar
          </Button>
        </Link>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalStyle}>
          <Box sx={style.boxStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "600" }}
            >
              Confirmar con Rafa
            </Typography>
            <Link
              href={whatsappdirRafa}
              underline="none"
              target="_blank"
              rel="noopener"
              className="fechaLink"
            >
              <Button variant="contained"> 🧔</Button>
            </Link>
          </Box>
          <Box sx={style.boxStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "600" }}
            >
              Confirmar con Mary
            </Typography>
            <Link
              href={whatsappdirMary}
              underline="none"
              target="_blank"
              rel="noopener"
              className="fechaLink"
            >
              <Button variant="contained">👩</Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default FechaCards;
/*   <Link
          href={whatsappdir}
          underline="none"
          target="_blank"
          rel="noopener"
          className="fechaLink"
        >
          <Button variant="contained">📞 Confirmar</Button>
        </Link> */

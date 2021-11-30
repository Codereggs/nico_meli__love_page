import "./TeEsperamos.css";
import { Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TeEsperamos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="teEsperamos">
      <Typography
        variant="h2"
        style={{ textAlign: "center" }}
        data-aos="zoom-in"
      >
        ¡Te esperamos!
      </Typography>
    </section>
  );
};

export default TeEsperamos;

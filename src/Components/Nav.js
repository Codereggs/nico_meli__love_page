import * as React from "react";
import "./Nav.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { FcHome, FcClock, FcPackage, FcCalendar } from "react-icons/fc";
import { Link, useMediaQuery } from "@mui/material";

export default function NavBar({ presencial }) {
  const md = useMediaQuery("(min-width:426px)");
  console.log(presencial);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="fixed"
        color="inherit"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          style={
            !md
              ? {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                  padding: 0,
                }
              : {}
          }
        >
          <Link
            onClick={() => {
              document
                .getElementById("toolbar")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            style={md ? { fontSize: "1em" } : { fontSize: "1.5em" }}
            sx={{ padding: "0 0.5rem" }}
          >
            <FcHome /> {md && "Inicio"}
          </Link>
          <Link
            onClick={() => {
              document
                .getElementById("fecha")
                .scrollIntoView({ behavior: "smooth" });
            }}
            component="button"
            variant="body1"
            color="secondary"
            underline="none"
            className="fechaLink"
            style={md ? { fontSize: "1em" } : { fontSize: "1.5em" }}
            sx={{ padding: "0 0.5rem" }}
          >
            <FcClock /> {md && "Fecha"}
          </Link>
          {presencial && (
            <Link
              onClick={() => {
                document
                  .getElementById("regalos")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              component="button"
              variant="body1"
              color="secondary"
              underline="none"
              className="fechaLink"
              style={md ? { fontSize: "1em" } : { fontSize: "1.5em" }}
              sx={{ padding: "0 0.5rem" }}
            >
              <FcPackage /> {md && "Regalos"}
            </Link>
          )}
          {presencial && (
            <Link
              onClick={() => {
                document
                  .getElementById("reserva")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              component="button"
              variant="body1"
              color="secondary"
              underline="none"
              className="fechaLink"
              style={md ? { fontSize: "1em" } : { fontSize: "1.5em" }}
              sx={{ padding: "0 0.5rem" }}
            >
              <FcCalendar /> {md && "Reserva"}
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar id="toolbar" />
    </Box>
  );
}

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#a3a3a3",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
  palette: {
    primary: {
      main: "#f9c8cc",
    },
    secondary: {
      main: "#a3a3a3",
    },
    third: {
      main: "#44db04",
    },
    neutral: {
      main: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Pacifico",
    },
    h2: {
      fontFamily: "Pacifico",
    },
    h3: { fontFamily: "Pacifico" },
    h4: { fontFamily: "Pacifico" },
    h5: {
      fontWeight: 600,
    },
    body1: {
      color: "#a3a3a3",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      fontSize: "0.8em",
    },
    color: "#a3a3a3",
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;

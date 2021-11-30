import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import PaginaPresencial from "./Components/PaginaPresencial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<PaginaPresencial />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

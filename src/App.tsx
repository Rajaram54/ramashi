import Home from "./components/Home";
import Event from "./components/Event";
import Tab from "./components/Tab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme.js";
import Story from "./components/Story";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Tab />
        <Box>
          <Routes>
            <Route path="/Event" element={<Event />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
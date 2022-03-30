import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Cookies from "js-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const LoginContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    if (Cookies.get("userId")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const theme = createTheme({});

  console.log("Theme", theme);

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route 
              path='/about'
              element={
                <About />
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

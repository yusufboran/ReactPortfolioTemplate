import React, { useState } from "react";
import Navbar from "./layouts/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Style from "./App.module.scss";
import { Hidden } from "@mui/material";
import PersistentDrawerLeft from "./components/Drawer.tsx";

export default function App() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <BrowserRouter>
      <Box className={darkMode ? Style.dark : Style.light}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          minHeight={"100vh"}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Hidden mdDown>
              <Navbar darkMode={darkMode} handleClick={handleClick} />
            </Hidden>
            <Hidden xsDown mdUp>
              <PersistentDrawerLeft />
            </Hidden>
          </Grid>
          <Grid item flexGrow={1}>
            <Routes>
              <Route exact index path={"/"} element={<Home />} />
              <Route exact path={"/about"} element={<About />} />
              <Route exact path={"/portfolio"} element={<Portfolio />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

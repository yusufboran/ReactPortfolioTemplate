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
import Snowfall from "react-snowfall";

const month = new Date().getMonth() + 1;

export default function App() {
  let [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      {(darkMode && month < 3) || (darkMode && month == 12) ? (
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          color={"#fff"}
          snowflakeCount={200}
          radius={[0.5, 3.0]}
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
        />
      ) : null}
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
    </>
  );
}

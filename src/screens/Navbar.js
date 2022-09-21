import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "../components/Toggler";
import LanguageSelector from "../components/LanguageSelector";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../assets/info/Info";
import { useTranslation } from "react-i18next";

export default function Navbar({ darkMode, handleClick }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : "location.pathname.slice(1, location.pathname.length)"
  );
  return (
    <Box component={"nav"} width={"100%"} paddingTop={2}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        <Box
          component={"li"}
          className={"home" === active && Style.active}
          sx={{ borderImageSource: info.gradient }}
        >
          <Link to={"/"} onClick={() => setActive("home")}>
            <p style={{ paddingBottom: "0.5rem" }}> {t("home")}</p>
          </Link>
        </Box>

        <Box
          component={"li"}
          className={"about" === active && Style.active}
          sx={{ borderImageSource: info.gradient }}
        >
          <Link to={"/about"} onClick={() => setActive("about")}>
            <p style={{ paddingBottom: "0.5rem" }}> {t("about")}</p>
          </Link>
        </Box>

        <Box
          component={"li"}
          className={"portfolio" === active && Style.active}
          sx={{ borderImageSource: info.gradient }}
        >
          <Link to={"/portfolio"} onClick={() => setActive("portfolio")}>
            <p style={{ paddingBottom: "0.5rem" }}> {t("portfolio")}</p>
          </Link>
        </Box>

        <Box display={"flex"} gap={{ xs: "1rem", md: "2rem" }}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
          <LanguageSelector />
        </Box>
      </Box>
    </Box>
  );
}

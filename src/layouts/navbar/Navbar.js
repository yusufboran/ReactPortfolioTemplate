import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "../../components/Toggler";
import LanguageSelector from "../../components/LanguageSelector";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../../assets/info/Info";
import { useTranslation } from "react-i18next";

export default function Navbar({ darkMode, handleClick }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : "location.pathname.slice(1, location.pathname.length)"
  );

  const links = [
    {
      name: "home",
      to: "/",
      active: "home",
    },
    {
      name: "about",
      to: "/about",
      active: "about",
    },

    {
      name: "portfolio",
      to: "/portfolio",
      active: "portfolio",
    },
  ];

  return (
    <Box component={"nav"} width={"100%"} paddingTop={2}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"uppercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link to={link.to} onClick={() => setActive(link.active)}>
              <p style={{ paddingBottom: "0.5rem" }}>{t(link.name)}</p>
            </Link>
          </Box>
        ))}

        <Box display={"flex"} gap={{ xs: "1rem", md: "2rem" }}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
          <LanguageSelector />
        </Box>
      </Box>
    </Box>
  );
}

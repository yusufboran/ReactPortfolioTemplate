import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "../components/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../assets/info/Info";
import LanguageSelector from "../components/LanguageSelector";

export default function Navbar({ darkMode, handleClick }) {
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
        {info.links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link to={link.to} onClick={() => setActive(link.active)}>
              {!link.type && (
                <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.type && <p>{link.name}</p>}
            </Link>
          </Box>
        ))}
        <Box  display={"flex"}  gap={{ xs: "1rem", md: "2rem" }}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
          <LanguageSelector
          />
        </Box>
       
      </Box>
    </Box>
  );
}

import React from "react";
import { Box } from "@mui/material";

export default function Toggler({ darkMode, handleClick }) {
  const transition = "all 250ms ease";

  return (
    <Box
      fontSize={"1.5rem"}
      sx={{
        cursor: "pointer",
        transform: "translateY(-3px)",
        ":hover": { transform: "translateY(-6px)", transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </Box>
  );
}

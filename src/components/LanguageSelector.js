import React from "react";
import { Box } from "@mui/material";

export default function LanguageSelector() {
  let [language, setLanguage] = React.useState(false);

  function handleClick() {
    setLanguage(!language);
  }

  return (
    <Box
      fontSize={"1.5rem"}
      sx={{
        cursor: "pointer",
        ":hover": {
          transform: "translateY(-3px)",
          transition: "all 250ms ease",
        },
      }}
    >
      {language ? (
        <text onClick={handleClick}>tr</text>
      ) : (
        <text onClick={handleClick}>en</text>
      )}
    </Box>
  );
}

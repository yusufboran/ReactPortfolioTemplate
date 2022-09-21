import React from "react";
import i18next from "i18next";
import { Box } from "@mui/material";

const LanguageSelect = () => {
  const transition = "all 250ms ease";
  let [language, setDarkMode] = React.useState(false);

  function languageChange() {
    {
      language ? i18next.changeLanguage("en") : i18next.changeLanguage("tr");
    }
    setDarkMode(!language);
  }

  return (

    <Box
    sx={{
      cursor: "pointer",
      transform: "translateY(3px)",
    }}
  >
      {language ? (
        <span onClick={languageChange} aria-label="Full Moon">
          en
        </span>
      ) : (
        <span onClick={languageChange} aria-label="New Moon">
          tr
        </span>
      )}
  </Box>
   
   
    
  );
};

export default LanguageSelect;

import React, { useEffect } from "react";
import i18next from "i18next";
import { Box } from "@mui/material";

const LanguageSelect = () => {
  let [language, setLanguage] = React.useState("tr");
  function languageChange() {
    language === "en"
      ? i18next.changeLanguage("en")
      : i18next.changeLanguage("tr");
    language === "en" ? setLanguage("tr") : setLanguage("en");
  }

  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);

  return (
    <Box
      sx={{
        transform: "translateY(3px)",
      }}
    >
      <span onClick={languageChange}>{language}</span>
    </Box>
  );
};

export default LanguageSelect;

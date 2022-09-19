import React from "react";
import { Box } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import DeleteIcon from '@mui/icons-material/Delete';

function PortfolioBlock(props) {
  const { title, language, stargazers_count } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      border={1}
      margin={2}
      borderRadius={1}
      borderColor={"#8b949e"}
      padding={1}
      paddingLeft={2}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        color={"#58a6ff"}
        marginBottom={"12px"}
        justifyContent={"space-between"}
      >
        <h1 style={{ fontSize: "16px" }}>{title}</h1>
        <Box
          color={"#8b949e"}
          border={1}
          borderRadius={2}
          paddingX={1}
          borderColor={"#30363d"}
        >
          <h1 style={{ fontSize: "12px" }}>Public</h1>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"} color={"#8b949e"}>
        <h1 style={{ fontSize: "12px" }}>{language}</h1>
        <AiOutlineStar size={"14px"} />
      </Box>
    </Box>
  );
}

export default PortfolioBlock;

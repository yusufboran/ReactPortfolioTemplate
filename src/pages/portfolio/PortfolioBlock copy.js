import React from "react";
import { Box } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import Colors from "./color.json";

function PortfolioBlock(props) {
  const { title, language, stargazers_count, url } = props;
  const langCol = Colors[language];
  return (
    <a href={url}>
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
          <div
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: langCol,
            }}
          />
          <h1 style={{ fontSize: "12px", paddingLeft: 4, paddingRight: 4 }}>
            {language}
          </h1>
          <Star stargazers_count={stargazers_count} />
        </Box>
      </Box>
    </a>
  );
}

function Star(props) {
  if (props.stargazers_count > 0) {
    return (
      <Box display={"flex"} flexDirection={"row"}>
        <AiOutlineStar size={"14px"} />
        {props.stargazers_count}
      </Box>
    );
  } else return null;
}

export default PortfolioBlock;

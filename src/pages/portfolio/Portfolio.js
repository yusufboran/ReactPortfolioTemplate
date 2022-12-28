import React, { useEffect, useState } from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Divider, Grid } from "@mui/material";
import { info } from "../../assets/info/Info";
import axios from "axios";
import ReactLoading from "react-loading";
import Projects from "./Projects";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + info.githubUserName + "/repos")
      .then((res) => {
        setRepos(res.data);
      });
  });

  return (
    <Box>
      <Projects />
      <Divider />
      {repos == null ? (
        <ReactLoading type={"spinningBubbles"} color="#ccc" />
      ) : (
        <Grid container display={"flex"} justifyContent={"center"}>
          {repos.map((item, index) => (
            <Grid item xs={12} md={5} key={index}>
              <PortfolioBlock
                title={item["name"]}
                language={item["language"]}
                stargazers_count={item["stargazers_count"]}
                url={item["svn_url"]}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

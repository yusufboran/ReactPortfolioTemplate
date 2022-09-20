import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import axios from "axios";

export default class Portfolio extends React.Component {
  state = {
    repos: [],
  };
 
  componentDidMount() {
    axios.get("https://api.github.com/users/"+ info.githubUserName+ "/repos").then((res) => {
      const repos = res.data;
      console.log(repos)
      this.setState({ repos });
    });
  }

  render() {
    return (
      <Box>
        <Grid container display={"flex"} justifyContent={"center"}>
          {this.state.repos.map((item, index) => (
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
      </Box>
    );
  }
}

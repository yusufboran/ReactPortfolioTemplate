import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const cards = [
  {
    id: 1,
    title: "Vue Dasboard",
    imgUrl:
      "https://raw.githubusercontent.com/yusufboran/dasboard-project/main/src/screenshots/home.jpg",
    context:
      "Pariatur ullamco fugiat sit velit cillum in ea esse sint laborum laborum esse amet velit.",
  },
  {
    id: 1,
    title: "admin React",
    imgUrl:
      "https://raw.githubusercontent.com/yusufboran/dasboard-project/main/src/assets/img/projectImage/adminReact.png",
    context:
      "Ipsum aliqua Lorem sunt consectetur elit dolor esse id labore laborum enim laboris magna culpa.",
  },
  {
    id: 1,
    title: "Deneme 2",
    imgUrl:
      "https://raw.githubusercontent.com/yusufboran/dasboard-project/main/src/screenshots/home.jpg",
    context:
      "Laborum do eiusmod ut enim est.Nulla cillum mollit consectetur do non amet ullamco aute cupidatat adipisicing consequat.",
  },
];

export default function Projject() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia component="img" image={card.imgUrl} alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.context}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

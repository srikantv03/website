import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Project(props) {
  const icons = props.icons.map((icon) => {
    <SocialIcon url={icon} />;
  });

  const aStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Card sx={{ maxWidth: 500, borderRadius: "25px", margin: "5px" }}>
      <a
        style={aStyle}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "150px" }}
            >
              {icons}
            </Grid>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

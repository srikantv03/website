import React, { Component } from "react";
import { Grid, Button, Container, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    const siStyle = {
      marginRight: "20px",
      marginLeft: "20px",
    };
    return (
      <div className="footer">
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "150px" }}
        >
          <SocialIcon style={siStyle} url="https://youtube.com" />
          <SocialIcon style={siStyle} url="https://github.com/treecant" />
          <SocialIcon style={siStyle} url="https://linkedin.com" />
          <SocialIcon style={siStyle} url="mailto::gmail.com" />
        </Grid>
      </div>
    );
  }
}

export default Footer;

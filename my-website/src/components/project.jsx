import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

class Project extends React.Component {
    render() { 
      const icons = this.props.icons.map((icon) => {
        <SocialIcon url={icon} />
      });
    
      return (
      <Card sx={{ maxWidth: 500, borderRadius: '25px', margin: '5px'}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.desc}
            </Typography>
            <Grid 
              container
              spacing={0}
              alignItems="center"
              justifyContent="center"
              style={{minHeight: '150px'}}>
                  {icons}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>);
    }
}
 
export default Project;
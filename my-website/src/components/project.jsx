import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

class Project extends React.Component {
    render() { 
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
        </CardContent>
      </CardActionArea>
    </Card>);
    }
}
 
export default Project;
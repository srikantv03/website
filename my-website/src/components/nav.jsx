import React, { Component } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

class Navigation extends React.Component {
    render() { 
      const appBarStyle = {
        backgroundColor: '#F2F2F2'
      };

      return (
        <React.Fragment>
          <AppBar style={appBarStyle} position="fixed">
            <Toolbar>
              <Button>Home</Button>
              <Button>Projects</Button>
              <Button>Resume</Button>
              <Button>Blog</Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
              <Button>Contact</Button>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
      );
    }
}
 
export default Navigation;
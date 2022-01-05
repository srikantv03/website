import React, { Component } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    state = {
      page: "home"
    }

    render() { 
      const appBarStyle = {
        backgroundColor: '#F2F2F2'
      };

      const getStyle = (sp) => {
        console.log(this.state.page)
        if (this.state.page === sp) {
          return {fontWeight: 'bold'};
        }
        return {};
      }


      return (
        <React.Fragment>
          <AppBar style={appBarStyle} position="fixed">
            <Toolbar>
              <div style={{marginLeft: '10vw'}}></div>
              <NavLink style={{textDecoration: 'none'}} to='/'><Button style={getStyle("home")} onClick={() => this.setState({page: "home"})}>Home</Button></NavLink>
              <NavLink style={{textDecoration: 'none'}} to='/projects'><Button style={getStyle("projects")} onClick={() => this.setState({page: "projects"})}>Projects</Button></NavLink>
              
              <Button>Resume</Button>
              <Button>Blog</Button>
              <Typography sx={{ flexGrow: 1 }} />
              <Button>Contact</Button>
              <div style={{marginLeft: '10vw'}}></div>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
      );
    }
}
 
export default Navigation;
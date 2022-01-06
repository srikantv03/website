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
          return {fontWeight: 900};
        }
        return {fontWeight: 900, color: 'black'};
      }


      return (
        <React.Fragment>
          <AppBar style={appBarStyle} position="fixed">
            <Toolbar>
              <div style={{marginLeft: '10vw'}}></div>
              <NavLink style={{textDecoration: 'none'}} to='/'><Button className="font-item" style={getStyle("home")} onClick={() => this.setState({page: "home"})}>Home</Button></NavLink>
              <NavLink style={{textDecoration: 'none'}} to='/projects'><Button className="font-item" style={getStyle("projects")} onClick={() => this.setState({page: "projects"})}>Projects</Button></NavLink>
              
              <Button className="font-item" style={getStyle("resume")}>Resume</Button>
              <Button className="font-item" style={getStyle("blog")}>Blog</Button>
              <Typography sx={{ flexGrow: 1 }} />
              <Button className="font-item" >Contact</Button>
              <div style={{marginLeft: '10vw'}}></div>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
      );
    }
}
 
export default Navigation;
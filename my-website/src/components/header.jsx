import { Grid, Button, Container, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import React, { Component } from 'react';
import Navigation from './nav';
import Footer from './footer';
import TextLoop from "react-text-loop";
import logo from './profile.jpg';



class Header extends React.Component {
    render() { 
        const learnMoreStyle = {
            borderRadius: '50px'
        };
        const imgStyle = {
            border: '5px solid #1976d2',
            borderRadius: '50%',
        }
        const leftContainerStyle = {}
        return (
        <div>
            <Grid 
            height='80vh'
            alignItems="center"
            justifyContent="center"
            container
            spacing={0}>
                <Grid item md={7}>
                    <Container style={{padding: 15}} maxWidth='sm'>
                        <h1 style={{fontSize: '58px'}}>My name is Srikant!</h1>
                        <h1 style={{fontSize: '32px'}}>
                            I'm a {" "}
                        <TextLoop>
                            <span>student.</span>
                            <span>programmer.</span>
                            <span>creator.</span>
                        </TextLoop>
                        </h1>
                        <p style={{fontSize: '24px'}}>An enthusiastic computer science major at Georgia Tech who loves to solve problems, learn new things, and of course, build cool stuff.</p>
                        <Button style={learnMoreStyle} variant="contained">Learn More</Button>
                    </Container>
                </Grid>
                <Grid item md={5}>
                    <Container style={{paddingTop: 45}} maxWidth='md'>
                        <img onDragStart={this.preventDragHandler} style={imgStyle} width={300} src={logo} alt="Logo" />;
                    </Container>
                </Grid>
            </Grid>            
        </div>);
    }
}
 
export default Header;
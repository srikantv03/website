import { Grid, Button, Container, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import React, { Component } from 'react';
import Navigation from './nav';
import Footer from './footer';
import TextLoop from "react-text-loop";
import logo from './profile.jpg';
import Typical from 'react-typical'


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
            <Container maxWidth='lg'>
            <Grid 
            height='70vh'
            alignItems="center"
            justifyContent="center"
            container
            spacing={0}>
                <Grid item md={7} order={{xs: 2, md: 1}}>
                    <Container style={{padding: 15}} maxWidth='sm'>
                        <h1 style={{fontSize: '58px'}}>My name is Srikant!</h1>
                        <h1 style={{fontSize: '32px'}}>
                            I'm a {" "}
                            <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={["programmer.", 1000,
                            "student.", 1000,
                            "creator.", 1000]} />
                        </h1>
                        <p style={{fontSize: '24px'}}>An enthusiastic computer science major at Georgia Tech who loves to solve problems, learn new things, and of course, build cool stuff.</p>
                        <Button style={learnMoreStyle} variant="contained">Learn More</Button>
                    </Container>
                </Grid>
                <Grid item md={4} order={{xs: 1, md: 2}}>
                    <Container style={{paddingTop: 45}} maxWidth='md'>
                        <img onDragStart={this.preventDragHandler} style={imgStyle} width={300} src={logo} alt="Logo" />;
                    </Container>
                </Grid>
            </Grid> 
            </Container>           
        </div>);
    }
}
 
export default Header;
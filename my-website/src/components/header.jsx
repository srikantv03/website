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
        return (
        <div>
            <Grid container spacing={10}>
                <Grid item md={6}>
                    <Container style={{
                        paddingLeft: '200px',
                        paddingRight: '0px',
                        paddingTop: '100px'
                    }}>
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
                <Grid item md={6}>
                    <Container style={{
                        padding: '150px'
                    }}>
                        <img style={imgStyle} width={300} src={logo} alt="Logo" />;
                    </Container>
                </Grid>
            </Grid>            
        </div>);
    }
}
 
export default Header;
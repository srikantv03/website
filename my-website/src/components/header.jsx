import { Grid, Button, Container, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import React, { Component } from 'react';
import Navigation from './nav';
import Footer from './footer';


class Header extends React.Component {
    render() { 
        const learnMoreStyle = {
            borderRadius: '50px'
        }
        return (
        <div>
            <Navigation></Navigation>
            <Grid container spacing={10}>
                <Grid item md={6}>
                    <Container style={{
                        paddingLeft: '250px',
                        paddingRight: '0px',
                        paddingTop: '150px'
                    }}>
                        <h1 style={{fontSize: '48px'}}>I'm Srikant!</h1>
                        <h1 style={{fontSize: '24px'}}>Student. Programmer. Enthusiast.</h1>
                        <p style={{fontSize: '18px'}}>An enthusiastic computer science major at Georgia Tech who loves to solve problems, learn new things, and of course, build cool stuff.</p>
                        <Button style={learnMoreStyle} variant="contained">Learn More</Button>
                    </Container>
                </Grid>
                <Grid item md={6}>
                    <Container style={{
                        padding: '150px'
                    }}>
                        <h4>Something Else</h4>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
            
        </div>);
    }
}
 
export default Header;
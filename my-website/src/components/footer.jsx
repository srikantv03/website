import React, { Component } from 'react';
import { Grid, Button, Container, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';



class Footer extends React.Component {
    render() { 
        return (
            <div className='footer'>
                <Container 
                alignItems="center"
                justifyContent="center"
                fixed
                style={{backgroundColor: 'blue'}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Container>
            </div>
        );
    }
}
 
export default Footer;
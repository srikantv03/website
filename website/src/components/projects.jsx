import React, { Component } from 'react';
import Project from './project';
import { Grid, Button, Container, IconButton } from '@mui/material';

export default function Projects(props) {
    const projects = [
        {
            name: 'LaunchCAD',
            desc: 'Lightweight mobile application that scans in basic cubic isometric drawings and uploads them to you computer.',
            icons: [
                'https://www.github.com/treecant/iso-to-cad'
            ]
        },
        {
            name: 'Sudoku Solver',
            desc: 'Recursive BFS sudoku solver that can solve sudoku puzzles of all n x n sizes.',
            icons: [
                'https://www.github.com/treecant'
            ]
        },
        {
            name: 'ByteAlloc',
            desc: 'Intuitive language to parse the bytes of a file. Inspired by packet parsers and rudimentary metadata retrievers.',
            icons: [
                'https://youtube.com/treecant'
            ]
        },
        {
            name: 'TaskIt',
            desc: 'Android task manager application that connects with the Canvas LMS API to streamline tasks across platforms.',
            icons: [
                'https://github.com/treecant'
            ]
        }
    ]
    
    const projectItems = projects.map((project) =>
        <Grid item md={6}>
            <Project name={project.name} desc={project.desc} icons={project.icons}/>
        </Grid>
    );
        
    return (
        <div>
            <center>
                <h1>PROJECTS</h1>
            </center>
            <Container maxWidth='md'>
            <Grid
                alignItems="center"
                justifyContent="center"
                container
                spacing={4}>
            {projectItems}
            </Grid>
            </Container>
        </div>
    );
}
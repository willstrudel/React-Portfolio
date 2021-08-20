import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/projectCards';
import useWindowPosition from '../hook/useWindowPosition';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        Width: '80vh',
        display: "flex",       
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

export default function Projects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
    <div className={classes.root} id="projects">
        <ImageCard place={places[0]} checked={checked} />
        <ImageCard place={places[1]} checked={checked} />
    </div>
    );
}
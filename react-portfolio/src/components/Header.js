import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    root: {
       display: 'flex',
       justifyContent: 'center',
       textAlign: 'center',
       alignItems: 'center',
       height: '30vh',

    },
    appbar: {
        background: 'none',
        fontFamily: 'Quicksand',
        fontSize: '1rem',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    title: {
        color: '#fff',
        fontFamily: 'Quicksand',
        fontSize: '3rem',
    },
}));
    

export default function Header() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
       <AppBar className={classes.appbar} elevation={0}>
           <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
                Will <span className={classes.colorText}>Struder.</span>
            </h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                 </IconButton>
           </Toolbar>
        </AppBar>
        <div>
            <h1 className={classes.title}>
                Hello, my name is <br /> Will
                <span className={classes.colorText}>Struder.</span>
            </h1>
        </div> 
    </div>
    );
} 


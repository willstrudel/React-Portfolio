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
       height: '90vh',

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
        textAlign: 'center'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
      color: '#DE8336'  
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontFamily: 'Quicksand',
        fontSize: '4rem',
    },
}));
    

export default function Header() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
       <AppBar className={classes.appbar} elevation={0}>
           <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
                 Welcome!
            </h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                 </IconButton>
           </Toolbar>
        </AppBar>
        <div className={classes.container}>
            <h1 className={classes.title}>
                My name is <br /> Will 
                <span className={classes.colorText}> Struder</span>.
            </h1>
        </div> 
    </div>
    );
} 


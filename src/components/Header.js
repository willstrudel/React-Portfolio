import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import logo from '../image/headshot.jpeg';

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
        flexGrow: '5',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#3d3d3d',
        fontSize: '2rem',
    },
    colorText: {
      color: '#DE8336'  
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#3d3d3d',
        fontFamily: 'Quicksand',
        fontSize: '4rem',
    },
    expand: {
        color: '#3d3d3d',
        fontSize: '3rem',
    },
    pic: {
        position: 'relative',
        resizeMode: 'contain',
        height: 320,
        margin: '30px',
        borderRadius: 100 / 2,
        overflow: "hidden",
        top: 80,
    },
}));
    

export default function Header() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])

    return (
    <div className={classes.root} id="header">
       <AppBar className={classes.appbar} elevation={0}>
           <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}> </h1>
             <IconButton>
                <SortIcon className={classes.icon}/>
             </IconButton>
           </Toolbar>
        </AppBar>
        

        <Collapse in={checked}
        { ... (checked ? { timeout: 1000 } : {})}>
             <div>
            <img className={classes.pic} src={logo} alt="Logo" />
            </div>
        <div className={classes.container}>
            <h1 className={classes.title}>
                My name is <br /> Will 
                <span className={classes.colorText}> Struder</span>.
            </h1>
            <Scroll to="projectCards" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.expand}/>
            </IconButton>
            </Scroll>
        </div> 
        </Collapse>
    </div>
    );
} 


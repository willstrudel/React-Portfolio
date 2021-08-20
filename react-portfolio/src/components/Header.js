import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';


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
    expand: {
        color: '#fff',
        fontSize: '3rem',
    },
    pic: {
        position: 'absolute',
        resizeMode: 'contain',
        height: 420,
        margin: '30px',
        borderRadius: 100 / 2,
        overflow: "hidden",
        left: 180,
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
            <h1 className={classes.appbarTitle}>
                 Welcome!
            </h1>
                  
                <IconButton>
                    <SortIcon className={classes.icon}/>
                 </IconButton>
            
           </Toolbar>
            <div>
            <img className={classes.pic} src='/assets/headshot.jpeg' alt="Logo" />
            </div>
        </AppBar>
        

        <Collapse in={checked}
        { ... (checked ? { timeout: 1000 } : {})}
        >
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


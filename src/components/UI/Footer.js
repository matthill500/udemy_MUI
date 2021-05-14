import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import {Link} from 'react-router-dom';

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.arcBlue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem : {
        margin: "3em"
    },
    icon:{
       height: "4em",
       width: "4em",
       padding: "1em",
       [theme.breakpoints.down("md")]: {
        width: "2.5em",
        height: "2.5em",
    },
    },
    socialContainer:{
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em"
    }
}));

export default function Footer (props){
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" onClick={()=>props.setValue(0)} className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>props.setValue(1)} to="/services" className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1);}} to="/customsoftware" className={classes.link}>
                            Custom software development
                        </Grid>
                        <Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2);}} to="/mobileapps" className={classes.link}>
                            iOS/Android App development
                        </Grid>
                        <Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3);} } to="/websites" className={classes.link}>
                            Website development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                            The Revolution
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                            Vision
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                            Technology
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                           Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}> 
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(3)} to="/about">
                            About us
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(3)} to="/about">
                            History
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(3)} to="/about">
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(4)} to="/contact">
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt="black decorative slash" className={classes.adornment} src={footerAdornment} />
            <Grid container className={classes.socialContainer} justify="flex-end">
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )
}
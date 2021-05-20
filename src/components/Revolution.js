import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';

import vision from '../assets/vision.svg';
import consultation from '../assets/consultationIcon.svg';
import mockup from '../assets/mockupIcon.svg';
import review from '../assets/reviewIcon.svg';
import design from '../assets/designIcon.svg';
import launch from '../assets/launchIcon.svg';
import maintain from '../assets/maintainIcon.svg';
import iterate from '../assets/iterateIcon.svg';
import build from '../assets/buildIcon.svg';
import technologyAnimation from '../animations/technologyAnimation/data';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
    },
}));

export default function Revolution(){
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: technologyAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined }style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer} style={{marginTop: "5em"}}>
                <Grid item lg>
                    <img src={vision} style={{maxWidth: matchesSM ? "300px" : "30em", marginBottom: matchesSM ? "5em" : "0em"}} alt="mountain binoculars" />
                </Grid>
            
                <Grid item container direction="column" style={{maxWidth: "40em"}} lg>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : "right"} gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"}>  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} direction="column" style={{maxWidth: "40em"}} lg>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined}>  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg container justify={matchesSM ?"center":"flex-end"}>
                   <Lottie options={defaultOptions} style={{maxWidth:"30em", margin:"0"}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>Process</Typography>
                </Grid>

            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#b3b3b3", height: matchesMD ? "70em" : "52.5em"}}>
                <Grid item container alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" alignItems={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Consultation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center",marginLeft: matchesMD ? "10em": "0em"}}>
                    <img src={consultation} alt="handshake" style={{maxWidth: matchesXS ? "100%" : undefined}}  />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#FF7373", height: matchesMD ? "75em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Mockup</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "4em": "0em"}}>
                    <img src={mockup} alt="design outline" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: matchesMD ? "85em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "14em": "0em", marginTop: matchesXS ? "-25em" : undefined}}>
                    <img src={review} alt="mag glass" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#A67C52", height: matchesMD ? "85em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Design</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "14em": "0em", marginTop: matchesXS ? "-25em" : undefined}}>
                    <img src={review} alt="mag glass" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#39E54A", height: matchesMD ? "85em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "14em": "0em", marginTop: matchesXS ? "-25em" : undefined}}>
                    <img src={review} alt="mag glass" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#FBB03B", height: matchesMD ? "70em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Build</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "2em": "0em"}}>
                    <img src={build} alt="construction site" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#C1272D", height: matchesMD ? "90em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Launch</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "24em": "0em"}}>
                    <img src={launch} alt="rocket" style={{width: '100px',maxWidth: matchesXS ? "100%" : "undefined"}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#8E45CE", height: matchesMD ? "75em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Maintain</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesMD ? "20em": "0em", marginTop: matchesXS ? "-25em" : undefined}}>
                    <img src={maintain} alt="wrench" style={{maxWidth: matchesSM ? "1000%" : undefined}} />
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} style={{backgroundColor: "#29ABE2", height: matchesMD ? "80em" : "52.5em"}}>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "3.5em"}}>Iterate</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>uis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{color: "#fff", maxWidth:"20em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center", marginLeft: matchesSM ? "10em": "0em", marginTop: matchesXS ? "-25em" : undefined}}>
                    <img src={iterate} alt="dominos" style={{maxWidth: matchesXS ? "100%" : undefined}} />
                </Grid>
            </Grid>
        </Grid>
    )
}
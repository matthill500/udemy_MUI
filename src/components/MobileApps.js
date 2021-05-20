import React from 'react';
import Lottie from 'react-lottie';
import {Link} from'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import IconButton from '@material-ui/core/IconButton';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data';

const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
    }
}))

export default function MobileApps(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <Grid container direction="column">
             <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
                            <img src={backArrow} alt="back to customer software page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center":undefined}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center":undefined}  paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center":undefined} paragraph>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center":undefined} paragraph>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
                            <img src={forwardArrow} alt="forward to another page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop:"10em", marginBottom: "10em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth:"20em"}} />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{marginBottom: "10em"}}>
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} style={{maxWidth: matchesXS ? "20em" : "28em"}} alt="tear 1 off sign" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

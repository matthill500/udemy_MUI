import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data';
import automationAnimation from '../animations/automationAnimation/data';
import uxAnimation from '../animations/uxAnimation/data';

import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import roots from '../assets/root.svg';

import CallToAction from '../components/UI/CallToAction';

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
    },
    itemContainer:{
        maxWidth: "40em"
    }
}));

export default function CustomSoftware(props){
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const automationsOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return(
        <Grid container direction="column">
            <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt="back to services page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center":undefined}>
                            Custom Software Development
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
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={forwardArrow} alt="forward to another page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} justify="center" style={{marginTop: "10em", marginBottom:"15em"}}>
                <Grid item container md style={{maxWidth: "40em", marginTop: matchesSM ? "5em": 0}} alignItems="center" direction="column">
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb" />
                    </Grid>
                </Grid>
                <Grid item container md style={{maxWidth: "40em", marginTop: matchesSM ? "5em": 0}} alignItems="center" direction="column">
                    <Grid item>
                        <Typography variant="h4">Save Cash</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
                <Grid item container md style={{maxWidth: "40em", marginTop: matchesSM ? "5em": 0}} alignItems="center" direction="column">
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-around">
                <Grid item container className={classes.itemContainer} className={classes.rowContainer} md style={{marginBottom: matchesMD ? "5em" : undefined}} direction={matchesSM ? "column" : "row"}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":undefined}>Digital Documents Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            It is a long established fact that a reader 
                            will be distracted by the readable content of a page when looking at its layout.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                            as opposed to using 'Content here, content here', making it look like readable English. 
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                            sometimes by accident, sometimes on purpose (injected humour and the like).  
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxWidth: 275, maxHeight: 275, minHeight: 250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.rowContainer} direction="row" className={classes.itemContainer} md>
                <Grid item md>
                        <Lottie options={scaleOptions} style={{maxWidth: 280, maxHeight: 260, marginLeft: matchesSM ? "6.9em" : 0}}/>
                    </Grid>
                    <Grid item container direction="column" style={{marginRight: matchesSM ? "1em" : "4em"}} md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </Typography>
                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>
            <Grid item container justify="space-around" className={classes.rowContainer} alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} style={{marginTop: "4em", marginBottom: "4em"}}>
            <Grid item container className={classes.itemContainer} md>
                <Grid item container direction="column">
                    <Grid item align="center" style={{marginBottom: "2em"}}>
                        <img src={roots} alt="tree with roots" height="450em" width={matchesSM ? "325em" : "450em"} />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center":undefined}>Root-cause Analysis</Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable.</Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable.</Typography>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container justify="space-around" className={classes.rowContainer} style={{marginBottom: "10em"}} alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"}>
                <Grid item container className={classes.itemContainer} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            It is a long established fact that a reader 
                            will be distracted by the readable content of a page when looking at its layout.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                            as opposed to using 'Content here, content here', making it look like readable English. 
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center":undefined}>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                            sometimes by accident, sometimes on purpose (injected humour and the like).  
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md style={{marginTop:"5em"}}>
                        <Lottie options={automationsOptions} style={{maxWidth: 280, maxHeight: 290}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                <Grid item md style={{marginTop:"5em", marginBottom: "2em"}}>
                        <Lottie options={uxOptions} style={{maxWidth: 155, maxHeight: 310}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </Typography>
                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>
            <Grid>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}
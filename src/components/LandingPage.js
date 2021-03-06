import React from 'react';
import Lottie from 'react-lottie';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import ButtonArrow from '../components/UI/original';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CallToAction from './UI/CallToAction.js';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    animation:{
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "30em"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.arcOrange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em",
    },
    learnButtonHero:{
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]:{
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "2em"
        }
    },
    heroTextContainer:{
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.arcOrange
    },
    subtitle:{
        marginBottom: "1em"
    },
    icon:{
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        },
        [theme.breakpoints.down("sm")]:{
            marginTop: "2em"
        }
    },
    serviceContainer:{
        marginTop: "12em",
        [theme.breakpoints.down("sm")]:{
            padding: 25
        }
    },
    revolutionBackground:{
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard:{
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]:{
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}));

export default function LandingPage(props){
    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/*--- HERO BLOCK ---*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">Bringing West Coast Technology<br /> to the Midwest</Typography>
                        <Grid container className={classes.buttonContainer} justify="center">
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained" component={Link} to="/estimate" onClick={()=>props.setValue(5)}>
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.learnButtonHero} variant="outlined" component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                                    <span style={{marginRight: 8}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill="blue" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                        </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> {/*--- custom software block ---*/}
                <Grid justify={matchesSM ? "center" : undefined} container direction="row" className={classes.serviceContainer}>
                    <Grid item>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time, Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, front investigation to{" "} <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" component={Link} to="/customsoftware" onClick={()=>{props.setValue(1); props.setSelectedIndex(1);}}>
                        <span style={{marginRight: 8}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill="blue" />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> {/*--- ios/Android block ---*/}
                <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className={classes.serviceContainer}>
                    <Grid item>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                           Extend functionality, Extend Access. Increase Engagment.
                        </Typography>
                        <Typography variant="subtitle1">
                           Integrate your web experience or create a standalone app{matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button variant="outlined" component={Link} to="/mobileapps" onClick={()=>{props.setValue(1); props.setSelectedIndex(2);}}>
                        <span style={{marginRight: 8}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill="blue" />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> {/*--- website block ---*/}
                <Grid justify={matchesSM ? "center" : undefined} container direction="row" className={classes.serviceContainer}>
                    <Grid item>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                           Reach more, discover more, sell more.
                        </Typography>
                        <Typography variant="subtitle1">
                        optimized for search engines, built for speed.
                        </Typography>
                        <Button variant="outlined" component={Link} to="/websites" onClick={()=>{props.setValue(1); props.setSelectedIndex(3);}}>
                        <span style={{marginRight: 8}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill="blue" />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*--- revolution block ---*/}
                <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>The Revolution</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary Insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" component={Link} to="/revolution" onClick={()=>{props.setValue(2);}}>
                                        <span style={{marginRight: 8}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="blue" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            <Grid item> {/*---information---*/}
                <Grid container style={{height: "80em"}} alignItems="center" direction="row">
                    <Grid item container style={{position: "absolute"}} direction={matchesSM ? "column" : "row"}>
                        <Grid item sm style={{marginLeft: matchesSM ? "2em" : "5em"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color:"white"}}>About Us</Typography>
                                <Typography variant="subtitle2">Lets get personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" style={{color: "white", borderColor: "white"}} component={Link} to="/about" onClick={()=>{props.setValue(3);}}>
                                        <span style={{marginRight: 8}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{marginRight: matchesSM ? "2em" : "5em", textAlign:"right"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color:"white"}}>Contact Us</Typography>
                                <Typography variant="subtitle2">Say hello <span role="img" aria-label="waving hand">????</span></Typography>
                                <Grid item>
                                    <Button variant="outlined" style={{color: "white", borderColor: "white"}} component={Link} to="/contact" onClick={()=>{props.setValue(4);}}>
                                        <span style={{marginRight: 8}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>
            <Grid item> {/*--- call to action block ---*/}
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    );
}

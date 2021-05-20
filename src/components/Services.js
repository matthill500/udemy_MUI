import React from 'react';

import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../components/UI/original';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
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
        marginTop: "10em",
        [theme.breakpoints.down("sm")]:{
            padding: 25
        }
    },
}));

export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h2" gutterBottom align={matchesSM ? "center" : undefined} style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1.25em" : "2em"}}>
                    Services
                </Typography>
            </Grid>
             <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> {/*--- ios/Android block ---*/}
                <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className={classes.serviceContainer} style={{marginTop: matchesSM ? "1em" : '5em'}}>
                    <Grid item style={{width: matchesSM ? undefined : "35em"}}>
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
                        <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon} width="250em" />
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
           
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined}}> {/*--- website block ---*/}
                <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className={classes.serviceContainer} style={{marginBottom: "10em"}}>
                    <Grid item style={{width: matchesSM ? undefined : "35em"}}>
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
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
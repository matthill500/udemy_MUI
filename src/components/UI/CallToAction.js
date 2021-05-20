import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './original.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-router-dom';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5
    },
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage:  `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        width: 205,
        height: 80,
        backgroundColor: theme.palette.common.arcOrange,
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]:{
            marginLeft: 0,
            marginRight: 0,
            marginTop: "2em"
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5
    },
}))

export default function CallToAction(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container justify={matchesSM ? "center": "space-between"} alignItems="center" className={classes.background} direction={matchesSM ? "column" : "row"}>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">Simple Software. <br />Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>Take advantage of the 21st Century.</Typography>
                            <Grid container item justify={matchesSM ? "center" : undefined}>
                                <Button variant="outlined" className={classes.learnButton} component={Link} to="/revolution" onClick={()=>{props.setValue(2);}}>
                                    <span style={{marginRight: 8}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                                </Button>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginRight: "3em", marginLeft: "2em"}}>
                <Button variant="contained" className={classes.estimateButton} component={Link} to="/estimate" onClick={()=>{props.setValue(5);}}>Free Estimate</Button>
            </Grid>
        </Grid>
    );
}
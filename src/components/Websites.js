import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import outreach from '../assets/outreach.svg';
import seo from '../assets/seo.svg';
import ecommerce from '../assets/ecommerce.svg';

import CallToAction from './UI/CallToAction';

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
    paragraphContainer: {
        maxWidth: "30em"
    }
}));

export default function Websites(props){
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
    return (
        <Grid container direction="column">
             <Grid item container direction="row" className={classes.rowContainer} justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={backArrow} alt="back to mobile apps" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item className={classes.paragraphContainer}>
                        <Typography variant="h2" align={matchesMD ? "center":undefined}>
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item className={classes.paragraphContainer}>
                        <Typography variant="body1" align={matchesMD ? "center":undefined}  paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center":undefined} paragraph>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transperant"}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={forwardArrow} alt="forward to another page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid> 
            <Grid container item direction={matchesSM ? "column": "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "15em"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4"  align={matchesSM ? "center" : undefined}>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} style={{marginLeft: matchesSM ? "0em" : "-2.75em"}} alt="mag glass" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction={matchesSM ? "column": "row"} alignItems="center" className={classes.rowContainer} style={{marginBottom: "15em", marginTop: "15em"}} justify="flex-end">
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center">E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="world outline" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1.25em"}} className={classes.paragraphContainer}>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction={matchesSM ? "column": "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="megaphone" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: "1em"}} className={classes.paragraphContainer}>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction={matchesSM ? "column": "row"} alignItems="center" justify="flex-end" style={{marginTop:"15em", marginBottom: "15em"}} className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4"  align={matchesSM ? "center" : undefined}>Search Engine <br /> Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} style={{marginLeft: matchesSM ? "0em" : "-2.75em"}} alt="winner podium" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}
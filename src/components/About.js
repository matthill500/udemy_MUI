import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import History from '../assets/history.svg';
import Avatar from '@material-ui/core/Avatar';
import yearbook from '../assets/yearbook.svg'
import profile from '../assets/founder.jpg';
import puppy from '../assets/puppy.svg';
import CallToAction from './UI/CallToAction';

const useStyles = makeStyles(theme => ({
    missionStatement:{
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]:{
            height: "20em",
            width: "20em",
            maxHeight: "300px",
            maxWidth: "300px"
        }
    }
}));

export default function About(props){
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
                 <Typography variant="h2">About us</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </Typography>
            </Grid>
            <Grid item>
                <Grid item container direction={matchesMD ? "column" : "row"} style={{marginTop:"10em", marginBottom:"10em"}} alignItems={matchesMD ? "center" : undefined} className={classes.rowContainer} justify="space-around">
                    <Grid item container direction="column" style={{maxWidth: "35em"}} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>History</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{fontWeight: 700, fontStyle:"italic"}}>We're the new kid on the block</Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                            <Typography variant="body1" paragraph> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item lg container justify="center">
                            <img src={History} alt="pen" style={{maxHeight: matchesMD ? "200px" : "22em"}} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" style={{marginBottom:"10em"}} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" align="center">Team</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Reece
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding when I was 9 years old
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar} />
                </Grid> 
                <Grid item container justify={matchesMD? "center":undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" style={{marginBottom: matchesMD ? "2.5em":0}} alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <img src={yearbook} alt="yearbook" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">A page from my yearbook!</Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                        <Typography variant="body1" align="center" paragraph>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Grid>
                    </Hidden>
                    <Grid item container direction="column"  alignItems={matchesMD ? "center" : "flex-end"} lg>
                        <Grid item>
                            <img src={puppy} alt="puppy" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" >My miniature dapple daschund</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    );
}
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ButtonArrow from './UI/original.js';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme => ({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
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
        [theme.breakpoints.down("md")]:{
            marginLeft: 0,
            marginRight: 0,
            marginTop: "2em"
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]:{
            marginBottom: "2em"
        }
    },
    message:{
        border: "2px solid "+theme.palette.common.arcBlue,
        marginTop: "2em",
        marginBottom: "2em",
        borderRadius: 5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height:45,
        width:245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.arcOrange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export default function Contact(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);

    const onChange = event => {
        let valid;
        switch(event.target.id){
        case 'email':
            setEmail(event.target.value)
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
            if(!valid){
                setEmailHelper("Invalid Email");
            }else{
                setEmailHelper("");
            }
            break;
        case 'phone':
            setPhone(event.target.value)
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
            if(!valid){
                setPhoneHelper("Invalid Phone Number");
            }else{
                setPhoneHelper("");
            }
            break;
        default: 
            break;
        }
    }

    return(
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3} style={{paddingBottom: "5em"}}>
               <Grid item>
                   <Grid container direction="column">
                   <Grid item>
                    <Typography align={matchesMD ? "center" : undefined } variant="h2" style={{lineHeight: 1.5}}>Contact Us</Typography>
                    <Typography align={matchesMD ? "center" : undefined } variant="body1" style={{color:theme.palette.common.arcBlue}}>We're waiting.</Typography>
                </Grid>

                <Grid item container direction="column" style={{maxWidth: "20em"}}>
                    <Grid item style={{marginTop: "1.5em"}}>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em", float:"left"}}  />
                        <Typography variant="body1"  style={{color: theme.palette.common.arcBlue, fontSize: "1rem"}}>(555) 555-5555</Typography>
                    </Grid> 
                </Grid>

                <Grid item container>
                    <Grid item style={{marginBottom:"0.5em"}}>
                        <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.arcBlue, fontSize: "1rem"}}>matt@email.com</Typography>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Name" id="name" fullWidth value={name} onChange={(event) => setName(event.target.value)}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Email" id="email" error={emailHelper.length !== 0} helperText={emailHelper} fullWidth value={email} onChange={onChange}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Phone" id="phone" error={phoneHelper.length !== 0} helperText={phoneHelper} fullWidth value={phone} onChange={onChange} />
                        </Grid> 
                    </Grid>
                </Grid>

                <Grid item style={{maxWidth: "20em"}}>
                    <TextField value={message} multiline InputProps={{disableUnderline: true}} rows={10} className={classes.message} id="message" onChange={(event) => setMessage(event.target.value)} />
                </Grid>
                <Grid item container justify="center">
                    <Button disabled={name.length === 0 || message.length === 0 || phoneHelper.length !==0 || emailHelper.length !== 0} variant="contained" onClick={() => setOpen(true)} className={classes.sendButton}>Send Message <img src={airplane} alt="airplane" style={{marginLeft: "0.69em"}}/></Button>
                </Grid>
                   </Grid>
               </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} style={{zIndex: 1302}}>
                <DialogContent>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Confirm Message</Typography>
                    </Grid>
                    <Grid item>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Name" id="name" fullWidth value={name} onChange={(event) => setName(event.target.value)}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Email" id="email" error={emailHelper.length !== 0} helperText={emailHelper} fullWidth value={email} onChange={onChange}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.5em"}}>
                        <TextField label="Phone" id="phone" error={phoneHelper.length !== 0} helperText={phoneHelper} fullWidth value={phone} onChange={onChange} />
                        </Grid> 
                    </Grid>
                    <Grid item>
                        <TextField value={message} style={{width:"100%"}} multiline InputProps={{disableUnderline: true}} rows={10} className={classes.message} id="message" onChange={(event) => setMessage(event.target.value)} />
                     </Grid>
                    <Grid item container alignItems="center">
                        <Grid item>
                        <Button color="primary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={() => setOpen(true)} className={classes.sendButton}>Send Message <img src={airplane} alt="airplane" style={{marginLeft: "0.69em"}}/></Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Grid item container direction={matchesMD ? "column" : "row"} justify={matchesMD ? "center" : undefined} className={classes.background} style={{marginTop:"-1em"}} xl={9} lg={8}  alignItems="center">
            <Grid item style={{ marginLeft: matchesMD ? 0 : "3rem", textAlign: matchesMD ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>Simple Software. <br />Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" align={matchesMD ? "center" : undefined} style={{fontSize: "1.5rem"}}>Take advantage of the 21st Century.</Typography>
                            <Grid container item justify={matchesMD ? "center" : undefined}>
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
        </Grid>
    )
}
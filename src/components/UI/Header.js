import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo:{
        height:"7em"
    },
    tabContainer:{
        marginLeft: "auto"
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button:{
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px"
    },
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    }
  }));

export default function Header(props){
    const classes = useStyles();

    const [value, setValue] = useState(0);

    useEffect(() => {
        if(window.location.pathname === "/" && value !== 0){
            setValue(0);
        } else if(window.location.pathname === "/services" && value !== 1){
            setValue(1);
        } else if(window.location.pathname === "/revolution" && value !== 2){
            setValue(2);
        } else if(window.location.pathname === "/about" && value !== 3){
            setValue(3);
        } else if(window.location.pathname === "/contact" && value !== 4){
            setValue(4);
        } else if(window.location.pathname === "/estimate" && value !== 5){
            setValue(5);
        }
    }, [value]);

    const handleChange = (e, val) => {
        setValue(val);
    }

    return (
        <>
        <ElevationScroll>
          <AppBar position="fixed" height="10px" color="primary">
              <Toolbar disableGutters>
                  <Button component={Link} disableRipple to="/" className={classes.logoContainer} onClick={() => {
                      setValue(0);
                  }}>
                    <img src={logo} alt="company logo" className={classes.logo}  />
                  </Button>
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                    <Tab className={classes.tab} component={Link} to="/" label="Home" />
                    <Tab className={classes.tab} component={Link} to="/services" label="Services" />
                    <Tab className={classes.tab} component={Link} to="/revolution" label="the Revolution" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Free Estimate
                </Button>
              </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>
      
    )
}
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        marginBottom: "3em",
        [theme.breakpoints.down("md")]:{
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom: "1.25em"
        }
    },
    logo:{
        height:"7em",
        [theme.breakpoints.down("md")]:{
            height: "6em"
        },
        [theme.breakpoints.down("xs")]:{
            height: "5em"
        }
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
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: "white",
        borderRadius: "0px",
        [theme.breakpoints.up("md")]:{
            marginTop: "2em"
        },
    },
    menuItem: {
        ...theme.typography.tab,
        color:'white',
        opacity: 0.7,
        "&:hover":{
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    drawerIcon:{
        height: "40px",
        width: "40px"
    },
    drawer: {
        backgroundColor: theme.palette.common.arcBlue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate:{
        backgroundColor: theme.palette.common.arcOrange
    },
    drawerItemSelected: {
        opacity: 1
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
  }));

export default function Header(props){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
 

    useEffect(() => {
        switch(window.location.pathname){
            case "/": 
                if(props.value !== 0){
                    props.setValue(0); 
                }
                break;
            case "/services": 
                if(props.value !== 1){
                    props.setValue(1);
                    props.setSelectedIndex(0);
                }
                break;
            case "/customsoftware": 
                if(props.value !== 1){
                    props.setValue(1);
                    props.setSelectedIndex(1);
                }
                break;
            case "/mobileapps": 
                if(props.value !== 1){
                    props.setValue(1);
                    props.setSelectedIndex(2);
                }
                break;
            case "/websites": 
                if(props.value !== 1){
                    props.setValue(1);
                    props.setSelectedIndex(3);
                }
                break;
            case "/revolution":
                if(props.value !== 2){
                    props.setValue(2);
                }
                break;
            case "/about":
                if(props.value !== 3){
                    props.setValue(3);
                }
                break;
            case "/contact":
                if(props.value !== 4){
                    props.setValue(4);
                }
                break;
            case "/estimate":
                if(props.value !== 5){
                    props.setValue(5);
                }
                break;
            default: 
            break;
        }
    }, [props.value, props.selectedIndex]);

    const handleChange = (e, val) => {
        props.setValue(val);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(index);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [
        {name: "Services", link: "/"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "iOS/Android App Development", link: "/mobileapps"},
        {name: "Website Development", link: "/websites"}
    ];

    const tabs = (
        <>
        <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                    <Tab className={classes.tab} component={Link} to="/" label="Home" />
                    <Tab 
                    aria-owns={anchorEl ? "simple-menu" : undefined} 
                    aria-haspopup={anchorEl ? "true" : undefined} 
                    className={classes.tab} 
                    component={Link} 
                    onMouseOver={event => handleClick(event)}
                    to="/services" 
                    label="Services" />
                    <Tab className={classes.tab} component={Link} to="/revolution" label="the Revolution" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                </Tabs>
                <Button variant="contained" color="secondary" component={Link} to="/estimate" onClick={() => props.setValue(5)} className={classes.button}>
                    Free Estimate
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} classes={{paper: classes.menu}} MenuListProps={{onMouseLeave: handleClose}} elevation={0}>
                  {menuOptions.map((option, index) => (
                      <MenuItem key={option} component={Link} to={option.link} classes={{root: classes.menuItem}} onClick={(event) => {handleMenuItemClick(event, index); props.setValue(1); handleClose()}} selected={index === props.selectedIndex && props.value === 1}>
                      {option.name}
                      </MenuItem>
                  ))}
                </Menu>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    <ListItem divider button component={Link} to="/" selected={props.value === 0} onClick={() => {setOpenDrawer(false); props.setValue(0);}}>
                        <ListItemText className={props.value === 0 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to="/services" selected={props.value === 1} onClick={() => {setOpenDrawer(false); props.setValue(1);}}>
                        <ListItemText className={props.value === 1 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to="/revolution" selected={props.value === 2} onClick={() => {setOpenDrawer(false); props.setValue(2);}}>
                        <ListItemText className={props.value === 2 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Revolution</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to="/about" selected={props.value === 3} onClick={() => {setOpenDrawer(false); props.setValue(3);}}>
                        <ListItemText className={props.value === 3 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>About</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to="/contact" selected={props.value === 4} onClick={() => {setOpenDrawer(false); props.setValue(4);}}>
                        <ListItemText className={props.value === 4 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Contact</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} className={classes.drawerItemEstimate} to="/estimate" selected={props.value === 5} onClick={() => {setOpenDrawer(false); props.setValue(5);}}>
                        <ListItemText className={props.value === 5 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={()=> setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    return (
        <>
        <ElevationScroll>
          <AppBar position="fixed" height="10px" color="primary" className={classes.appbar}>
              <Toolbar disableGutters>
                  <Button component={Link} disableRipple to="/" className={classes.logoContainer} onClick={() => {
                      props.setValue(0);
                  }}>
                    <img src={logo} alt="company logo" className={classes.logo}  />
                  </Button>
                {matches ? drawer : tabs}
              </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>
    )
}
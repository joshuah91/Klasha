import React, { useState } from "react";
import {
  Drawer,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  Divider,
  IconButton,
} from "@material-ui/core";
import logo from "../Images/logo.png";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";


//
import clsx from "clsx";


const drawerWidth = "180px";

const useStyle = makeStyles((theme) => ({
  move: {
    width: "150px",
  },

  margin: {
    margin: theme.spacing(1),
    
  },

  appBar: {
    Index: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      display: "none",
      position: "absolute",
      left: "-100px",
      transition: "10s",
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
    position: "absolute",
    top: "10px",
    left: "8px",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      // display: "block",
    },
  },
  logout: {
    color: "#fff",
    textDecoration: "none",
    marginRight: "1rem",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  //Mobile View
  menuButtonMobile: {
    display: "flex",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
      width: "100px",
    },
  },

  gridMobile: {
    display: "block",
    transition: "10s",
    left: "0",
  },
}));

function Sidebar({ match }) {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const closeMobileMenu = () => setIsOpen(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const activeNav = (path) => {
    if (match.path === path) {
      return { backgroundColor: "white" };
    } else {
      return { color: "active" };
    }
  };

  const classes = useStyle();
  return (
    <Grid item xs={12} md={1}>
      <Grid item container xs={12} className={classes.MenuMobileButton}>
        <Grid item xs={1} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          {isOpen ? (
            <CloseIcon style={{ fontSize: "50px" }} />
          ) : (
            <MenuIcon style={{ fontSize: "50px" }} />
          )}
        </IconButton>
        <Grid item xs={1} />
      </Grid>
      <Grid className={classes.move}>
        <AppBar
          className={
            isOpen
              ? clsx(classes.gridMobile, { [classes.drawerOpen]: open })
              : clsx(classes.appBar, {
                  [classes.appBarShift]: open,
                })
          }
          
        >
          <Drawer
            variant="permanent"
            className={classes.move}
            
            classes={{
              paper:
                window.innerWidth <= 400
                  ? clsx({
                      [classes.drawerOpen]: open,
                    })
                  : clsx({
                      [classes.drawerOpen]: open,
                      [classes.drawerClose]: !open,
                    }),
            }}
          >
            
            <List
              aria-label="open drawer"
              onMouseEnter={handleDrawerOpen}
              onMouseLeave={handleDrawerClose}
            >
              <List>
                  <ListItem button onClick={closeMobileMenu}>
                  <img src={logo} alt="logo" style={{ width: "70px", marginBottom: "20px" }} />
                  </ListItem>
                </List>
                <List
                subheader= {
                  <ListSubheader component="div" style={{ fontWeight: "700", fontSize: "14px", color: "#2A2A2A" }}>
                    Main Pages
                  </ListSubheader>
                }>
                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <DashboardOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Dashboard</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>  
                      <AccountBalanceWalletOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Balance</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <PersonOutlineOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Customers</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <TimelineOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Analytics</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
                <List
                subheader= {
                  <ListSubheader component="div" style={{ fontWeight: "700", fontSize: "14px", color: "#2A2A2A" }}>
                    General
                  </ListSubheader>
                }>
                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <TuneOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Settings</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <StarOutlineOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Team</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <PhoneOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Contact</Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem button onClick={closeMobileMenu}>
                    <ListItemIcon>
                      <MobileScreenShareOutlinedIcon style={activeNav("/")} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Logout</Typography>
                    </ListItemText>
                  </ListItem>
              </List>
            </List>

            <Divider />
            <Divider />
            <Divider />
          </Drawer>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default withRouter(Sidebar);
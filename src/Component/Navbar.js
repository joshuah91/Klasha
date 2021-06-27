import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { Avatar } from "@material-ui/core";
import Face from "../Images/Face.png";

const useStyles = makeStyles((theme) => ({
  balance: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },
  
  heading: {
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.6px",
    color: "#2A2A2A",
    marginLeft: "190px",
    marginTop: "8px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
    },  
  },

  avatar: {
    color: "#200E32", 
    backgroundColor: "#F5F5F0",
    marginLeft: "880px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  large: {
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 131, 119, 0.1)",
    border: "1px solid #FF8377",
    boxSizing: "border-box",
    marginRight: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  subHeading: {
    marginLeft: "190px",
    marginTop: "-20px",
    fontSize: "12px",
    fontFamily: "Founders Grotesk",
    color: "#A6ABB2",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
      marginTop: "0px",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.balance}>
        <Typography className={classes.heading}>
          Balances
        </Typography>
        <Avatar className={classes.avatar}>
          <NotificationsOutlinedIcon />
        </Avatar>
        <Avatar
          alt="Lady Avatar"
          src={Face}
          className={classes.large}
        />
      </Grid>
      <Grid>
        <Typography className={classes.subHeading}>
          Today, 19th October 2020
        </Typography>
      </Grid>
    </>
  );
};

export default Navbar;
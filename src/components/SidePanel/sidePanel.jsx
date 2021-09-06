import React,{useContext} from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { Hidden, withWidth, Badge } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import useStyles from "./sidePanelStyles.js";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { useEffect } from "react";
import { authorizationRequest } from "../../views/Home/homeActions";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../auth/auth.js";

function MainDrawer(props) {
  const classes = useStyles();
  const { width } = props;
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  useEffect(()=>{
    if (user==null){

    }
    else{
        console.log("User - ",user.currentUser.uid,user.currentUser.email)
        dispatch(authorizationRequest({uID:user.currentUser.uid,email:user.currentUser.email}))
    }
  },[dispatch,user])

  const drawer = (
    <div style={{ height: "100%", fontFamily: "Poppins !important" }}>
      <div className={classes.logocontainer}> 
          <img 
            src="/App_Icon.png"
            style={{ width: 220, height: 80,color:"white" }}
            alt="Logo"
          />
      </div>

      <List
        style={{ fontFamily: "Poppins !important" }}
        className={classes.HoverEffect}
      >
        <NavLink
          to="/dashboard"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: "inherit",
              fontFamily: "Poppins !important",
            }}
          >
            <ListItemIcon>
              <Badge color="secondary" variant="dot" invisible={true}>
               <DashboardIcon style={{color:"white"}} activeStyle={{color:"red"}}/>
              </Badge>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Dashboard
            </label>
          </ListItem>
        </NavLink>
        <NavLink
          to="/shops"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}      
          >
            <ListItemIcon>
              <DirectionsBikeIcon/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins" }}
              className={classes.DrawerLables}
            >
              Live Delivery
            </label>
          </ListItem>
        </NavLink>

        <NavLink
          to="/invoices"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: "inherit",
              fontFamily: "Poppins !important",
            }}
          >
            <ListItemIcon style={{ position: "relative" }}>
              <EqualizerIcon/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Statistics
            </label>
          </ListItem>
        </NavLink>

        <NavLink
          to="/receipts"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: "inherit",
              fontFamily: "Poppins !important",
            }}
          >
            <ListItemIcon style={{ position: "relative" }}>
              <PersonAddIcon/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Registration
            </label>
          </ListItem>
        </NavLink>

        <NavLink
          to="/settings"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: "inherit",
              fontFamily: "Poppins !important",
            }}
          >
            <ListItemIcon style={{ position: "relative" }}>
              <MailIcon/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Mail Details
            </label>
          </ListItem>
        </NavLink>


        <NavLink
          to="/settings"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#63231c",
            backgroundColor: "#de8071",
            fontWeight: "bold",
            
          }}
        >
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: "inherit",
              fontFamily: "Poppins !important",
            }}
          >
            <ListItemIcon style={{ position: "relative" }}>
              <FeedbackIcon/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Feedback
            </label>
          </ListItem>
        </NavLink>

      </List>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          fontFamily: "Poppins !important",
        }}
      >
        
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
        {/* </Hidden>*/}
      </nav>
      <main className={width !== "xs" ? classes.content : classes.contentXs}>
        <div> {props.children}</div>
      </main>
    </div>
  );
}

MainDrawer.propTypes = {
  window: PropTypes.func,
};

export default withWidth()(MainDrawer);

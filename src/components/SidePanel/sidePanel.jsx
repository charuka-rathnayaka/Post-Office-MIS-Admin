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
import { useSelector } from "react-redux";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PaymentIcon from '@material-ui/icons/Payment';

function MainDrawer(props) {
  const classes = useStyles();
  const { width } = props;
  const userRole= useSelector((state)=>state.homeReducer.role);
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
        style={{ fontFamily: "Rubik, sans-serif" }}
        className={classes.HoverEffect}
      >
        {userRole=="postmaster"?(
          <div>
        <NavLink
          to="/dashboard"

          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Rubik, sans-serif",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#030114",
            backgroundColor: "#e6e3fa",
            fontWeight: "bold",
            
          }}
          className={classes.NavButton}
        >
          <ListItem
            button
            className={classes.listItem}
           
          >
            <ListItemIcon>
             
               <DashboardIcon color='primary' style={{ color:"#727287"}}/>
          
            </ListItemIcon>
            <label
              style={{ fontFamily: "Rubik, sans-serif"}}
              className={classes.DrawerLables}
            >
              Dashboard
            </label>
          </ListItem>
        </NavLink>
        <NavLink
          to="/live-delivery"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Rubik, sans-serif",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#030114",
            backgroundColor: "#e6e3fa",
            fontWeight: "bold",
            
          }}
          className={classes.NavButton}
        >
          <ListItem
            button
            className={classes.listItem}      
          >
            <ListItemIcon>
              <DirectionsBikeIcon color='primary' style={{ color:"#727287"}}/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Rubik, sans-serif" }}
              className={classes.DrawerLables}
            >
              Live Delivery
            </label>
          </ListItem>
        </NavLink>

        <NavLink
          to="/statistics"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#030114",
            backgroundColor: "#e6e3fa",
            fontWeight: "bold",
            
          }}
          className={classes.NavButton}
        >
          <ListItem
            button
            className={classes.listItem}
            
          >
            <ListItemIcon style={{ position: "relative" }}>
              <EqualizerIcon color='primary' style={{ color:"#727287"}}/>
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
          to="/registration"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#030114",
            backgroundColor: "#e6e3fa",
            fontWeight: "bold",
            
          }}
          className={classes.NavButton}
        >
          <ListItem
            button
            className={classes.listItem}
            
          >
            <ListItemIcon style={{ position: "relative" }}>
              <PersonAddIcon color='primary' style={{ color:"#727287"}}/>
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
          to="/complains"
          style={{
            color: "#f7f3f2",
            textDecoration: "none",
            fontFamily: "Mulish",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "normal",
          }}
          activeStyle={{
            color: "#030114",
            backgroundColor: "#e6e3fa",
            fontWeight: "bold",
            
          }}
          className={classes.NavButton}
        >
          <ListItem
            button
            className={classes.listItem}
          
          >
            <ListItemIcon style={{ position: "relative" }}>
              <FeedbackIcon color='primary' style={{ color:"#727287"}}/>
            </ListItemIcon>
            <label
              style={{ fontFamily: "Poppins !important" }}
              className={classes.DrawerLables}
            >
              Complains
            </label>
          </ListItem>
        </NavLink></div>):(
          userRole=="supervisor"?
            (<div>
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
                  color: "#030114",
                  backgroundColor: "#e6e3fa",
                  fontWeight: "bold",
                  
                }}
                className={classes.NavButton}
              >
                <ListItem
                  button
                  className={classes.listItem}
                 
                >
                  <ListItemIcon>      
                    <DashboardIcon color='primary' style={{ color:"#727287"}}/>
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
                to="/registration"
                style={{
                  color: "#f7f3f2",
                  textDecoration: "none",
                  fontFamily: "Mulish",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
                activeStyle={{
                  color: "#030114",
                  backgroundColor: "#e6e3fa",
                  fontWeight: "bold",
                  
                }}
                className={classes.NavButton}
              >
                <ListItem
                  button
                  className={classes.listItem}
                  
                >
                  <ListItemIcon style={{ position: "relative" }}>
                    <PersonAddIcon color='primary' style={{ color:"#727287"}}/>
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
                to="/mail-assignments"
                style={{
                  color: "#f7f3f2",
                  textDecoration: "none",
                  fontFamily: "Mulish",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
                activeStyle={{
                  color: "#030114",
                  backgroundColor: "#e6e3fa",
                  fontWeight: "bold",
                  
                }}
                className={classes.NavButton}
              >
                <ListItem
                  button
                  className={classes.listItem}
                  
                >
                  <ListItemIcon style={{ position: "relative" }}>
                    <AssignmentIcon color='primary' style={{ color:"#727287"}}/>
                  </ListItemIcon>
                  <label
                    style={{ fontFamily: "Poppins !important" }}
                    className={classes.DrawerLables}
                  >
                    Mail Assignment
                  </label>
                </ListItem>
              </NavLink>

              <NavLink
                to="/mail-transfer"
                style={{
                  color: "#f7f3f2",
                  textDecoration: "none",
                  fontFamily: "Mulish",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
                activeStyle={{
                  color: "#030114",
                  backgroundColor: "#e6e3fa",
                  fontWeight: "bold",
                  
                }}
                className={classes.NavButton}
              >
                <ListItem
                  button
                  className={classes.listItem}
                  
                >
                  <ListItemIcon style={{ position: "relative",color:"white"}}>
                    <LocalShippingIcon color='primary' style={{ color:"#727287"}}/>
                  </ListItemIcon>
                  <label
                    style={{ fontFamily: "Poppins !important" }}
                    className={classes.DrawerLables}
                  >
                    Mail transfers
                  </label>
                </ListItem>
              </NavLink>
            </div>):null
        )}
        {

userRole=="receptionist"?
  (<div>
    <NavLink
      to="/dashboard"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
          <DashboardIcon color='primary' style={{ color:"#727287"}}/>
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
      to="/normPform"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
          <AddBoxIcon color='primary' style={{ color:"#727287"}}/>
        </ListItemIcon>
        <label
          style={{ fontFamily: "Poppins !important" }}
          className={classes.DrawerLables}
        >
          Normal Post
        </label>
      </ListItem>
    </NavLink>

    <NavLink
      to="/regPform"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
          <AddBoxIcon color='primary' style={{ color:"#727287"}}/>
        </ListItemIcon>
        <label
          style={{ fontFamily: "Poppins !important" }}
          className={classes.DrawerLables}
        >
          Registered Post
        </label>
      </ListItem>
    </NavLink>

    <NavLink
      to="/logiPform"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
          <AddBoxIcon color='primary' style={{ color:"#727287"}}/>
        </ListItemIcon>
        <label
          style={{ fontFamily: "Poppins !important" }}
          className={classes.DrawerLables}
        >
          Logi Post
        </label>
      </ListItem>
    </NavLink>
    <NavLink
      to="/moneyOform"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
          <AddBoxIcon color='primary' style={{ color:"#727287"}}/>
        </ListItemIcon>
        <label
          style={{ fontFamily: "Poppins !important" }}
          className={classes.DrawerLables}
        >
          Money Order
        </label>
      </ListItem>
    </NavLink>
    <NavLink
      to="/moneyO"
      style={{
        color: "#f7f3f2",
        textDecoration: "none",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        fontStyle: "normal",
      }}
      activeStyle={{
        color: "#030114",
        backgroundColor: "#e6e3fa",
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
      <PaymentIcon color='primary' style={{ color:"#727287"}}/>
    </ListItemIcon>
    <label
      style={{ fontFamily: "Poppins !important" }}
      className={classes.DrawerLables}
    >
      Pay Money Order
    </label>
    </ListItem>
    </NavLink>
  </div>):null
  };

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

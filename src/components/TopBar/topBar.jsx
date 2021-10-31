import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from './topBarStyles';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../views/Login/loginActions.js";
import ProfileModal from '../Profile/profileModal';

export default function TopBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const userFirstName= useSelector((state)=>state.homeReducer.firstName);
  const userLastName=useSelector((state)=>state.homeReducer.lastName);
  const userDetails=useSelector((state)=>state.homeReducer);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
 // console.log("page-",page)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(true);
    handleMobileMenuClose();
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#070712',paddingBottom:"10px" }}>
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            {props.page}
          </Typography>
          
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="error"
            >
              <AccountCircle  color="primary" style={{ fontSize: 40 }}/>
            </IconButton>
          </div>
          <div className={classes.userName}>{userFirstName} {userLastName}</div>
          
        </Toolbar>
      </AppBar>
      <ProfileModal open={open} setOpen={setOpen} userDetails={userDetails}/>
      {renderMenu}

    </div>
  );
}

import { makeStyles } from "@material-ui/core/styles";


const drawerWidthTab = 100;
const drawerWidthLap = 250;
const drawerWidthMobile = 56;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Poppins",
    minWidth: "400px",
  },
  drawer: {
    [theme.breakpoints.up("xs")]: {
      width: drawerWidthMobile,
      flexShrink: 0,
    },
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthTab,
      flexShrink: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidthLap,
      flexShrink: 0,
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBar: {
    position: "fixed",
    backgroundColor: "white",
    boxShadow: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidthTab}px)`,
      marginLeft: drawerWidthTab,
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidthLap}px)`,
      marginLeft: drawerWidthLap,
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  Divider: {
    backgroundColor: "white",
  },
  // drawer
  HoverEffect: {
    marginTop: 0,
    "& :hover": {
      color: "white",
      fontWeight: "800",
      fontSize:"16px",
      
    },
    "&.active": {
      color: "#63231c",
      backgroundColor: "#4B76D1",
      fontWeight: "bold",
    },
  },
  DrawerButtons: {
    color: "#63231c",
    boxSizing: "border-box",
    "&.active": {
      color: "#F3F7FB",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 28,
      marginLeft: "21px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
  },
  DrawerLables: {
    fontFamily: "Rubik, sans-serif",
    display: "flex",
    [theme.breakpoints.up("sm") && theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: "#980404",
    [theme.breakpoints.down("xs")]: {
      width: drawerWidthMobile,
    },
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthTab,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidthLap,
    },
  },
  logocontainer: {
    [theme.breakpoints.up("md")]: {
      height: "150px",
      paddingLeft: "5px",
      paddingTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      paddingTop: "5px",
    },
    [theme.breakpoints.up("sm") && theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: "10px",
      height: "150px",
    },
  },
  content: {
    backgroundColor:"white",
    flexGrow: 1,
    
    
  },
  contentXs: {
    backgroundColor: "blue",
    flexGrow: 1,
    
    
  },
  listItem: {
    height: "41px",
    marginBottom: "8px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "32px",
    },
    backgroundColor: "inherit",
    
  },
  avatar: {
    height: "48px",
    width: "48px",
  },
  notifiIcon: {
    height: "30px",
    width: "30px",
  },
  NavButton:{
    "& :hover": {
      color: "white",
      fontWeight: "800",
    
      backgroundColor:"#de8071"
    },
  }
}));

export default useStyles;

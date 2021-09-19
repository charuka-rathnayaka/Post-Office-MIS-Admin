import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
     
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        color:"black",
        fontFamily:"Rubik, sans-serif",
        fontWeight:"bold",
        fontSize:"24px",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    userName:{
        color:"black",
        fontSize:"20px",
        paddingLeft:"10px",
        fontFamily:"Rubik, sans-serif",
        fontWeight:"normal"
    }
    
  }));

export default useStyles;

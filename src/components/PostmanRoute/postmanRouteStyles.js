import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: "#dfdfe8",
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    accorditionHeading:{
      backgroundColor:"#0f0f2e",
      color:"white"
    },
    details: {
      alignItems: 'center',
      backgroundColor:"#d7d7db"
    },
    accordionActions:{
      backgroundColor:"#d7d7db",
      paddingBottom:"10px"
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));
  

  export const SubmitButton = withStyles(() => ({
      
    root: {
        maxHeight:"25px",
      fontSize:"12px",
      textDecoration:"none",
      color:"white",
      backgroundColor: "#1b1b2e",
      "&:hover": {
          backgroundColor: "#000000",
          fontSize:"12px"
      },
      minWidth:"100px"
      },
  }))(Button);

  export const RemoveButton = withStyles(() => ({
      
    root: {
        maxHeight:"25px",
      fontSize:"12px",
      textDecoration:"none",
      color:"white",
      backgroundColor: "#540e09",
      "&:hover": {
          backgroundColor: "#240301",
          fontSize:"12px"
      },
      minWidth:"100px"
      },
  }))(Button);
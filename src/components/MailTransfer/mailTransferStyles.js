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
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    accorditionHeading:{
      backgroundColor:"#ed6464"
    },
    details: {
      alignItems: 'center',
      backgroundColor:"#f7c1c1"
    },
    accordionActions:{
      backgroundColor:"#f2a7a7",
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
    color:"white",
      marginTop: "20px",
      backgroundColor: "#8c0e07",
      "&:hover": {
        backgroundColor: "#8c0e07",
      },
      minWidth:"100px"
    },
  }))(Button);
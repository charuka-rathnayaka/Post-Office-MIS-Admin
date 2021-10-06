import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const SubmitButton = withStyles(() => ({
    root: {
    color:"white",
      marginTop: "20px",
      backgroundColor: "#8c0e07",
      "&:hover": {
        backgroundColor: "#8c0e07",
        fontSize:"16px"
      },
      minWidth:"100px"
    },
  }))(Button);

export const useStyles = makeStyles(() => ({
    
      errorText: {
        fontSize: "14px",
        color: "#6e0603",
        float: "left",
        marginLeft: "4px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
      },
      successText: {
        fontSize: "16px",
        color: "green",
        float: "left",
        marginLeft: "40%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
      },
      loadingText: {
        fontSize: "16px",
        color: "orange",
        float: "left",
        marginLeft: "40%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
      },
      errorTextMsg: {
        fontSize: "16px",
        color: "#6e0603",
        float: "left",
        marginLeft: "35%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
      },

}))
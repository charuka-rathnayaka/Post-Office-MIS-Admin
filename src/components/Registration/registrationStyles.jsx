import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    InputLine:{
        marginBottom:"6px",
        marginLeft:"80px",
    },
    InputLabel:{
        textAlign:"left",
        minWidth:"238px",
        fontSize:"18px",
        marginTop:"14px",
        
    },
    Input:{
        marginLeft:"70px",
        minWidth:"350px",
        
    },
      Form:{
        backgroundColor: "#dddce6",
        marginTop:"30px",
        paddingTop:"50px",
        marginLeft:"30px",
        marginRight:"30px",
        marginBottom:"50px",
        paddingBottom:"60px",
        borderRadius:10
      },
      password: {
        marginBottom: "16px",
        height: "48px",
        backgroundColor: "#FDFDFD !important",
        fontFamily: "Poppins",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#D9EAFD",
        borderRadius: 8,
      },
      ErrorText:{
          marginTop:"14px",
          color: "#6e0603",
      },
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

export const LoginButton = withStyles(() => ({
  root: {
    textDecoration:"none",
    color:"white",
    marginTop: "20px",
    backgroundColor: "#01011a",
    "&:hover": {
        backgroundColor: "#000000",
        fontSize:"14px"
    },
    minWidth:"100px"
    },
  }))(Button);

  export const styles = makeStyles(() => ({
    errorText: {
      fontSize: "12px",
      color: "#F7685B",
      
      float: "left",
      marginLeft: "13px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
    },
  }));
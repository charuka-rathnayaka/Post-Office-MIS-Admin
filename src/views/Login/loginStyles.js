import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  errorText: {
    fontSize: "14px",
    color: "#F7685B",
    marginTop: -14,
    float: "left",
    marginLeft: "13px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
  },
}));

export const styles = {
  LoginPage:{
    backgroundColor:"#d4d4d4",
    minHeight:"100vh"
  },

  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  labelRoot: {
    backgroundColor: "rgba(0, 0, 0, 0) !important",
    opacity: 0.7,
    color: "#6A707E",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
  },
  root: {
    marginBottom: "16px",
    backgroundColor: "#FDFDFD !important",
    fontFamily: "Poppins",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9EAFD",
    borderRadius: 8,
  },
  
  password: {
    marginBottom: "16px",
    backgroundColor: "#FDFDFD !important",
    fontFamily: "Poppins",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9EAFD",
    borderRadius: 8,
  },
  boxMain: {
    background: "#121226",
    borderRadius: "16px",
    padding: "53px",
    maxWidth: "436px",
    maxHeight: "473px",
    marginTop: "6%",
    textAlign: "center",
  },
  boxMainXs: {
    background: "#121226",
    padding: "25px",
    maxWidth: "488px",
    maxHeight: "473px",
    border: "2px solid #F4F4F4",
    marginLeft: "20px",
    marginRight: "20px",
    background: "#980404",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontStyle: "normal",
    marginTop: 0,
    marginBottom: "60px",
    color: "white",
    fontSize: "24px",
  },
  link: {
    marginTop: "15px",
    fontSize: "14px",
    fontWeight: 500,
  },
};

export const LoginButton = withStyles(() => ({
  root: {
    borderRadius: 8,
    textDecoration:"none",
    color:"white",
    marginTop: "20px",
    backgroundColor: "#01011a",
    "&:hover": {
        backgroundColor: "#000000",
        fontSize:"15px"
    },
    minWidth:"100px"
    },
}))(Button);

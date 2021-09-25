import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(() => ({
    form:{
        backgroundColor:"#fab8b6",
        justifyContent:"center",
        maxWidth:"850px",
        display:"flex",
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"30px",
        border:"8px black"
    },
    button:{
        alignContent:"left",
        paddingBottom:"15px"
  
    },
    fieldLabel: {
        fontSize: "18px",
        color: "#2B292B",
        textAlign: "left",
        fontWeight: "normal",
      },
      fieldValue: {
        marginLeft:"5px",
        fontWeight: "bold",
        fontSize: "18px",
        letterSpacing: "0.25px",
        fontStyle: "normal",
        color: "#2B292B",
        textAlign: "left",
       
      },
  }));


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
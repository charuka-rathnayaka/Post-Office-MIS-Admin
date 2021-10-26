import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(() => ({
    form:{
        backgroundColor:"#dddce6",
        justifyContent:"center",
        maxWidth:"850px",
        display:"flex",
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"30px",
        border:"8px black",
        borderRadius:10
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
      textDecoration:"none",
      color:"white",
      marginTop: "20px",
      backgroundColor: "#1b1b2e",
      "&:hover": {
          backgroundColor: "#000000",
          fontSize:"14px"
      },
      minWidth:"100px"
      }
    
  }))(Button);
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";


export const ExportButton = withStyles(() => ({
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
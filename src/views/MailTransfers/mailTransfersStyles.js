import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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


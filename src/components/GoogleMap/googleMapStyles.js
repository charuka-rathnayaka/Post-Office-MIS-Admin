import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    text: {
      margin: "0px",
      fontSize: "15px"
    },
    textTitle: {
      margin: "0px",
      fontSize: "15px",
      fontWeight: 500
    },
    gMap: {
      top: 0,
      left: 0,
      zIndex: 100000,
      width: "100%",
      height: "80vh"
    },
    MarkerLabel: {
      color: "red",
      zIndex: 7778998
    }
  }));
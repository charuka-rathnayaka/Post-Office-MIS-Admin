import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "#e8edff",
      border: '1px solid #030117',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    content:{
        fontSize:"16px",
        marginTop:"10px",
        fontWeight:900,
        color:"#040324"
    },
    role:{
        color:"#8b89c4"
    }
  }));
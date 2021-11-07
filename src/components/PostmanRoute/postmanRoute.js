import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dateFormat from "dateformat";
import { useStyles,SubmitButton,RemoveButton } from './postmanRouteStyles';
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { useDispatch} from "react-redux";
import { saveStreet, removeStreet} from '../../views/PostmenRoutes/postmenRoutesActions';

export default function PostmanRoute(data) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const wrapperRef = React.useRef();
  const history = useHistory();
  const date=new Date();
  const formattedDate=dateFormat(date, "yyyy/mm/dd");
  const postman=data.postman;
  const [street, setStreet] = React.useState("");
    function addStreet(postman,street){
        dispatch(saveStreet(postman.userID,street))
    }

    function deleteStreet(postman,street){
        dispatch(removeStreet(postman.userID,street))
    }
  
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accorditionHeading}
        >
          <div className={classes.column}>
            <Typography className={classes.heading} style={{textAlign:"left"}}>Name: {postman.firstName} {postman.lastName}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Email: {postman.email}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>NIC: {postman.NIC}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center" style={{fontWeight:"bold"}}>Route</TableCell>
                <TableCell align="center" style={{fontWeight:"bold"}}></TableCell>
                
            </TableRow>
            </TableHead>
            <TableBody>
            {postman.routes.map((row) => (
                <TableRow key={row}>
                <TableCell align="center" component="th" scope="row">
                    {row}
                </TableCell>
                <TableCell align="center" >
                    <RemoveButton
                        variant="contained"
                        color="#63231c"
                        disableElevation
                        type="submit"
                        onClick={()=>{deleteStreet(postman,row)}}        
                        >
                        REMOVE
                    </RemoveButton>
                </TableCell>
                </TableRow>
            ))}
            
            <TableRow key="add">
            
                <TableCell align="center" component="th" scope="row">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Street" variant="outlined" 
                        value={street}
                        onChange={(event) => {setStreet(event.target.value)}}/>
                    </form>
                </TableCell>

                <TableCell align="center" >
                    <SubmitButton
                        variant="contained"
                        color="#63231c"
                        disableElevation
                        type="submit"
                        onClick={()=>{addStreet(postman,street)}}        
                        >
                        ADD STREET
                    </SubmitButton>
                </TableCell>
                
            </TableRow>
            
            </TableBody>
        </Table>
        </AccordionDetails>
        <Divider />
        
        <Divider />
        
      </Accordion>
    </div>
  );
}


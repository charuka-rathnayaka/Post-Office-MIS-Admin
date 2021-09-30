
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {TextField,MenuItem, Select} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import { changePostman } from "../../views/MailAssignments/mailAssignmentsActions";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fab8b6",
    color: "black",
    fontFamily:"bold",
    fontWeight:800,
    fontSize:"18px"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



export default function MailAssignment(data){
  const classes = useStyles();
  const dispatch=useDispatch();
  const mailAssignments=data.data.assignments;
  const postmen=data.data.postmenData
  function changeRow(pid,email){
        dispatch(changePostman(pid,email));
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Post ID</StyledTableCell>
            <StyledTableCell align="center">Address No</StyledTableCell>
            <StyledTableCell align="center">Street 1</StyledTableCell>
            <StyledTableCell align="center">Street 2</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Postman</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mailAssignments.map((mail,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
              {mail.pid}
              </StyledTableCell>
              <StyledTableCell align="center">{mail.addressNumber}</StyledTableCell>
              <StyledTableCell align="center">{mail.street1}</StyledTableCell>
              <StyledTableCell align="center">{mail.street2}</StyledTableCell>
              <StyledTableCell align="center">{mail.city}</StyledTableCell>
              <StyledTableCell align="center">
            
                <Select
                    fullWidth 
                    id="outlined-basic"
                    variant="outlined"                    
                    name="postman"                                 
                    defaultValue={mail.postmanID}
                    onChange={(el)=>(changeRow(mail.pid,el.target.value))}
                    
                    >
                        {postmen.map((postman) => (
                            <MenuItem key={postman.id} value={postman.id}>
                                {postman.firstName} {postman.lastName}
                            </MenuItem>
                        ))}
                </Select>
                        
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

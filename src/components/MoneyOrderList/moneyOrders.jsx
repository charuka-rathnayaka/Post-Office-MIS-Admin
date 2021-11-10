import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button, TableFooter, Typography } from '@material-ui/core';
import {removeMoneyOrderStart} from "../../views/RecepFunc/recepActions";
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';





const columns = [
  { id: 'pid', label: 'PID', minWidth: 170 },
  { id: 'recipientID', label: 'Recipient ID', minWidth: 120 },
  {id: 'recipientName',
    label: 'Recipient Name',
    minWidth: 170,
    
  },
  {
    id: 'securityCode',
    label: 'SecurityCode',
    minWidth: 60,
    
  },
  {
    id: 'moneyAmount',
    label: 'Amount of Money',
    minWidth: 60,
    align: 'right',
    
  },
  {
    id: 'paid',
    label: '',
    minWidth: 100,
    
  },
];



// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const useStyles = makeStyles({
  root: {
    width: '97%',
    height: '95%'
  },
  container: {
    maxHeight: 650,
    borderRadius: 15,
    margin: '10px 10px'
  },
  tableHeader:{
      fontWeight:"bold",
      backgroundColor: '#4d4dff',
      color:'black'
    
  }
  
});

export default function MOTable({moneyOrders}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userID = useSelector((state)=>state.homeReducer.currentUserID);
  const dataSend = useSelector((state)=>state.postOfficeReducer.dataSend);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  let MoneyOrders=[]
  for (let i=0;i<moneyOrders.length;i++){
      MoneyOrders[i]={
          pid: moneyOrders[i].pid,
          recipientID: moneyOrders[i].recipientID,
          recipientName: moneyOrders[i].recipientName,
          securityCode: moneyOrders[i].securityCode,
          moneyAmount:moneyOrders[i].moneyAmount,
      }
  }

//   const rows=[];
//   moneyOrders.map((option)=> (
//     rows=[createData(option.pid,option.recipientID,option.recipientName,option.securityCode,option.moneyAmount,"paid")]
//   ))
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    //console.log("Ch")
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSubmit=(id,userID)=> (event)=>{
    event.preventDefault();
    //console.log("handle",id)
    
    dispatch(removeMoneyOrderStart(id,userID))
    
    
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                    className={classes.tableHeader}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {MoneyOrders.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row)=>(
                <TableRow  key={row.pid}>
                    <TableCell>
                        <Typography className={classes.pid}>{row.pid}</Typography>    
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.recipientID}>{row.recipientID}</Typography>    
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.recipientName}>{row.recipientName}</Typography>    
                    </TableCell>
                    <TableCell>
                        <Typography className={classes.securityCode}>{row.securityCode}</Typography>    
                    </TableCell>
                    <TableCell align='right'>
                        <Typography className={classes.moneyAmount}>{row.moneyAmount}</Typography>    
                    </TableCell>
                    <TableCell>
                      
                        <Button type="submit" variant="filled" style={{backgroundColor:'#000033',color:'white'}} onClick={handleSubmit(row.pid,userID)}>Pay</Button>  
                        
                    </TableCell>
                </TableRow>
            ))}
            
                  
          </TableBody>
        </Table> 
        </TableContainer> 
      
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={MoneyOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
    {(dataSend)?
    <Collapse in={open}>
    <Alert onClose={() => {setOpen(false);}}>Successfully Updated Money Order!</Alert>
    </Collapse>
    :<p></p>
    } 
     
    </Paper>
  );
}
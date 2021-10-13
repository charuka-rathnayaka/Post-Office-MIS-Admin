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
import { useStyles,SubmitButton } from './mailTransferStyles';
import { Grid } from '@material-ui/core';

export default function MailTransfer(data) {
  const classes = useStyles();
  const date=new Date();
  const formattedDate=dateFormat(date, "yyyy/mm/dd");
  const transfer=data.transfer;
  
  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.accorditionHeading}
        >
          <div className={classes.column}>
            <Typography className={classes.heading} style={{textAlign:"left"}}>To: {transfer.postOffice}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Number of Items: {transfer.itemCount}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Date: {formattedDate}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
         
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell style={{fontWeight:"bold"}}>PID</TableCell>
                <TableCell align="center" style={{fontWeight:"bold"}}>Post Type</TableCell>
                <TableCell align="center" style={{fontWeight:"bold"}}>Destination</TableCell>
                <TableCell align="center" style={{fontWeight:"bold"}}>Destination Address</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {transfer.mails.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.pid}
                </TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.addressNumber+", "+row.street1+", "+row.street2+", "+row.city}</TableCell>
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </AccordionDetails>
        <Divider />
        <Grid container className={classes.accordionActions} justifyContent="space-around">
            <Grid item>
                <SubmitButton
                    variant="contained"
                    color="#63231c"
                    disableElevation
                    type="submit"
                    onClick={()=>{}}        
                    >
                    PRINT BARCODE
                </SubmitButton>
            </Grid>
            
            <Grid item>
                <SubmitButton
                    variant="contained"
                    color="#63231c"
                    disableElevation
                    type="submit"
                    onClick={()=>{}}        
                    >
                    CONFIRM TRANSFER
                </SubmitButton>
            </Grid>

        </Grid>
      </Accordion>
    </div>
  );
}

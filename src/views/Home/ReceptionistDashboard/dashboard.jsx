import React from "react";
import Nav from "../../../components/SidePanel/sidePanel";

import TopBar from "../../../components/TopBar/topBar";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-live-clock';
import calendar from '../../../images/calendar.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#00004d',
      },
    h2:{
        color:"black",
    }
  }));

export default function ReceptionistDashboard(){
    
    const classes = useStyles();
    var today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   
    return(
        <div>
            <Nav>
                <TopBar/>
                <br/>
                <h1>Receptionist Dashboard</h1>
                <br/><br/><br/>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper1}>
                        <img src={calendar} alt=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper2}>
                        <br/><br/>
                            <h2 style={{color:"white"}}>Date</h2>
                            
                            <p style={{fontSize:"60px", color:"white",fontWeight:"bold"}}>{date}</p>
                            <br/><br/>
                            <h2 style={{color:"white"}}>Time</h2>
                            <p style={{fontSize:"60px", color:"white",fontWeight:"bold"}}><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></p>
                            <br/><br/>
                        </Paper>
                    </Grid>
                       
                </Grid>
            </Nav>
        </div>
    )
}
import React from "react";
import Nav from "./../../components/SidePanel/sidePanel";
import TopBar from "./../../components/TopBar/topBar";
import RevenueChart from "./../../components/Charts/RevenueChart/revenueChart";
import AcceptedServiceTypesLineChart from "../../components/Charts/AcceptedServiceTypeLineChart/acceptedServiceTypesLineChart";
import { useStyles } from "./statisticsStyles";
import {Grid} from "@material-ui/core";
import { TextField } from "@material-ui/core";
export default function Statistics(){
   const classes=useStyles()
   const [startDate,setStartDate]= React.useState(new Date());
   const [endDate,setEndDate]= React.useState(new Date())
   // <RevenueChart/>  
    return(
        <div>
            <Nav>
                <TopBar page="Statistics"/>
                <div>
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue={startDate}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                </div>
                <div style={{marginTop:"80px"}}>
                    <AcceptedServiceTypesLineChart/>
                </div>
                <Grid container direction="row" spacing={0} alignItems={"center"} justify={"space-evenly"} className={classes.PieGrid}>
                    <Grid item className={classes.PieBox}>
                        <div className={classes.PieTitle}>Mail Service Revenue - Past 30 days</div>
                        <RevenueChart/> 
                    </Grid>
                    <Grid item className={classes.PieBox}>   
                        <div className={classes.PieTitle}>Mail Service Count - Past 30 days</div>        
                        <RevenueChart/>               
                    </Grid>
                </Grid>
                <div></div>
            </Nav>
        </div>
    )
}
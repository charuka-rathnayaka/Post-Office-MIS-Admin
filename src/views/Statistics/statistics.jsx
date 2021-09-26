import React,{useEffect} from "react";
import Nav from "./../../components/SidePanel/sidePanel";
import TopBar from "./../../components/TopBar/topBar";
import RevenueChart from "../../components/Charts/PieCharts/revenueChart";
import AcceptedServiceTypesLineChart from "../../components/Charts/AcceptedServiceTypeLineChart/acceptedServiceTypesLineChart";
import { useStyles } from "./statisticsStyles";
import {Grid} from "@material-ui/core";
import DateFramePicker from "../../components/DatePicker/dateFramePicker";
import { useDispatch,useSelector} from "react-redux";
import { countDataRequest } from "./statisticsActions";
import CountChart from "../../components/Charts/PieCharts/countChart";
import StatisticsReport from "../../components/Reports/statisticsReport";

export default function Statistics(){
   const classes=useStyles();
   var date=new Date();
   const [startDate,setStartDate]= React.useState(new Date(date.setDate((new Date).getDate() - 20)));
   const [endDate,setEndDate]= React.useState(new Date())
   const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(countDataRequest(startDate,endDate,postOffice))
    },[dispatch,startDate,endDate,postOffice])
   
    return(
        <div>
            <Nav>
                <TopBar page="Statistics"/>
                <div>
                    <Grid container direction="row" justifyContent="center" spacing={5}>
                        <Grid item>
                            <DateFramePicker
                                startDate={startDate}
                                setStartDate={setStartDate}
                                startLabel="Start Date"
                                endDate={endDate}
                                setEndDate={setEndDate}
                                endLabel="End Date"
                            />
                        </Grid>
                        <Grid item style={{marginTop:"5px"}}>
                            <StatisticsReport/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop:"80px"}}>
                    <AcceptedServiceTypesLineChart/>
                </div>
                <Grid container direction="row" spacing={0} alignItems={"center"} justify={"space-evenly"} className={classes.PieGrid}>
                    <Grid item className={classes.PieBox}>
                        <div className={classes.PieTitle}>Mail Service Revenue</div>
                        <RevenueChart/> 
                    </Grid>
                    <Grid item className={classes.PieBox}>   
                        <div className={classes.PieTitle}>Mail Service Count</div>        
                        <CountChart/>              
                    </Grid>
                </Grid>
                <div></div>
            </Nav>
        </div>
    )
}
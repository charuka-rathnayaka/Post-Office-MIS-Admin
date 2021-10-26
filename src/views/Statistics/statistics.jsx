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
import { DateRangePick} from "../../components/DatePicker/dateRangePicker";

export default function Statistics(){
   const classes=useStyles();
   const today=new Date();
   const day20 = new Date(today - 1000 * 60 * 60 * 24 * 20);
   const [dateRange, setDateRange] = React.useState([day20, today]);
   const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(countDataRequest(dateRange[0],dateRange[1],postOffice))
    },[dispatch,dateRange,postOffice])
   
    return(
        <div>
            <Nav>
                <TopBar page="Statistics"/>
                <div>
                    <Grid container direction="row" justifyContent="center" spacing={5}>
                        <Grid item>
                            <DateRangePick
                                dateRange={dateRange}
                                setDateRange={setDateRange}
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
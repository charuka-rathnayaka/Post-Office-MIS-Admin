import React, { useEffect } from "react";
import Nav from "../../../components/SidePanel/sidePanel";
import PerformanceChart from "../../../components/Charts/PerformanceChart/performanceChart";
import TopBar from "../../../components/TopBar/topBar";
import DateFramePicker from "../../../components/DatePicker/dateFramePicker";
import RevenueReport from "../../../components/Reports/revenueReport";
import { useDispatch,useSelector} from "react-redux";
import { performanceDataRequest} from "./dashboardActions";
import { Grid } from "@material-ui/core";


export default function Dashboard(){
    const date = new Date();
    const day20 = new Date(date - 1000 * 60 * 60 * 24 * 20);
    const today=new Date();
    const [endDate,setEndDate]= React.useState(today);
    const [startDate,setStartDate]= React.useState(day20);
    const postOffice = useSelector((state) => state.homeReducer.postOffice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(performanceDataRequest(startDate,endDate,postOffice))
    },[dispatch,startDate,endDate,postOffice]);
    
    return(
        <div>
            <Nav>
                <TopBar page="Dashboard"/>
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
                            <RevenueReport/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop:"20px"}}>
                    <PerformanceChart/>
                </div>
            </Nav>
        </div>
    )
}
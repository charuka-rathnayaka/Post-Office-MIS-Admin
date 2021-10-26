import React, { useEffect } from "react";
import Nav from "../../../components/SidePanel/sidePanel";
import PerformanceChart from "../../../components/Charts/PerformanceChart/performanceChart";
import TopBar from "../../../components/TopBar/topBar";
import RevenueReport from "../../../components/Reports/revenueReport";
import { useDispatch,useSelector} from "react-redux";
import { performanceDataRequest} from "./dashboardActions";
import { Grid } from "@material-ui/core";
import { DateRangePick} from "../../../components/DatePicker/dateRangePicker";

export default function Dashboard(){
    const today=new Date();
    const day20 = new Date(today - 1000 * 60 * 60 * 24 * 20);
    const [dateRange, setDateRange] = React.useState([day20, today]);
    const postOffice = useSelector((state) => state.homeReducer.postOffice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(performanceDataRequest(dateRange[0],dateRange[1],postOffice))
    },[dispatch,dateRange,postOffice]);
    
    return(
        <div>
            <Nav>
                <TopBar page="Dashboard"/>
                <div>
                    <Grid container direction="row" justifyContent="center" spacing={5}>
                        <Grid item>
                            <DateRangePick
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                        </Grid>
                        <Grid item style={{marginTop:"5px"}}>
                            <RevenueReport/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop:"20px", paddingBottom:"15px"}}>
                    <PerformanceChart/>
                </div>
            </Nav>
        </div>
    )
}
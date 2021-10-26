import React,{useState} from "react";
import { Grid } from "@material-ui/core";
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/styles/index.less'; // less
import 'rsuite/dist/rsuite.min.css'; // or css
import 'rsuite/dist/rsuite-rtl.min.css';
// import './dateRangePickerStyles.css'

export function DateRangePick(props){
    
    const dateRange = props.dateRange;
    const setDateRange= props.setDateRange;
    console.log("Date range - ",dateRange)
    return (
        <div>
            <Grid container>
                <Grid item style={{marginTop:"25px"}}>
                   <DateRangePicker   value={dateRange} onChange={setDateRange} placeholder="Select Date Range" style={{ width: 230 }}/>
                </Grid>
               
            </Grid>
        </div>
    )
}
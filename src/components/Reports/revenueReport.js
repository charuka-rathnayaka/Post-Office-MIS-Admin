import React from "react";
import {CSVLink} from "react-csv";
import {useSelector} from "react-redux";
import {ExportButton} from "./reportStyles";


function RevenueReport(){
    const dashboardReducer = useSelector((state) => state.dashboardReducer); 
    const header=[
        {label:"Date", key:"date"},
        {label:"Normal Mail", key:"Normal Mail"},
        {label:"Registered Mail", key:"Registered Mail"},
        {label:"Money Order", key:"Money Order"},
        {label:"Package Delievery", key:"Package Delievery"},
    ]
    const csvReport={
        filename:"Revenue-Report.csv",
        headers:header,
        data:dashboardReducer.revenueData
    }
    const gotData=dashboardReducer.dataRetreived;
    return(   
            <div>
                <CSVLink {...csvReport} style={{textDecoration:"none"}}>
                    <ExportButton
                        variant="contained"
                        color="#63231c"
                        disableElevation
                        type="submit"  
                        >
                            EXPORT REVENUE REPORT
                    </ExportButton>
                </CSVLink>
            </div>
    )
}

export default RevenueReport;
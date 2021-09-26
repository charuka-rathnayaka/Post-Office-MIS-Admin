import React from "react";
import {CSVLink} from "react-csv";
import {useSelector} from "react-redux";
import {ExportButton} from "./reportStyles";


function StatisticsReport(){
    const statisticsReducer = useSelector((state) => state.statisticsReducer); 
    const header=[
        {label:"Date", key:"Date"},
        {label:"Normal Mail", key:"Normal Mail"},
        {label:"Registered Mail", key:"Registered Mail"},
        {label:"Money Order", key:"Money Order"},
        {label:"Package Delievery", key:"Package Delievery"},
    ]
    const csvReport={
        filename:"Statistics-Report.csv",
        headers:header,
        data:statisticsReducer.countData
    }
    return(   
            <div>
                <CSVLink {...csvReport} style={{textDecoration:"none"}}>
                    <ExportButton
                        variant="contained"
                        color="#63231c"
                        
                        type="submit"  
                        >
                            EXPORT STATISTICS REPORT
                    </ExportButton>
                </CSVLink>
            </div>
    )
}

export default StatisticsReport;
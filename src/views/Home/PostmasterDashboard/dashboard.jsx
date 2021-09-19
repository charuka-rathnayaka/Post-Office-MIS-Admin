import React from "react";
import Nav from "../../../components/SidePanel/sidePanel";
import PerformanceChart from "../../../components/Charts/PerformanceChart/performanceChart";
import TopBar from "../../../components/TopBar/topBar";
export default function PostmasterDashboard(){
    
    
   
    return(
        <div>
            <Nav>
                <TopBar page="Dashboard"/>
                <div style={{marginTop:"80px"}}>
                    <PerformanceChart/>
                </div>
            </Nav>
        </div>
    )
}
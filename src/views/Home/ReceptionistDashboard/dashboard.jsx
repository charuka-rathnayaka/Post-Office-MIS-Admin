import React from "react";
import Nav from "../../../components/SidePanel/sidePanel";

import TopBar from "../../../components/TopBar/topBar";
import dashboard from "../../../images/recepDashboard.jpg";
export default function ReceptionistDashboard(){
    
    
   
    return(
        <div>
            <Nav>
                <TopBar/>
                <h1>Receptionist Dashboard</h1>
                <div>
                    <img src={dashboard} alt=""/>
                </div>
            </Nav>
        </div>
    )
}
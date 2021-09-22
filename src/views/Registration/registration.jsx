import React from "react";
import Nav from "../../components/SidePanel/sidePanel";
import RegistrationForm from "../../components/Registration/registration";
import TopBar from "../../components/TopBar/topBar";
export default function Registration(){
    const employeeTypesPostmaster = [
            {
                label: "Postmaster",
                value: "postmaster"
            },
            {
                label: "Supervisor",
                value: "supervisor"
            },
            {
                label: "Receptionist",
                value: "receptionist"
            },
            {
                label: "Postman",
                value: "postman"
            },
            {
                label: "Delivery Log Keeper",
                value: "deliveryLogKeeper"
            }
            ]
    
   
    return(
        <div style={{backgroundColor: "#fab8b6"}}>
            <Nav>
                <TopBar page="Dashboard"/>
                
                <RegistrationForm employeeTypes={employeeTypesPostmaster}/>
            </Nav>
        </div>
    )
}
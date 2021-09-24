import React from "react";
import Nav from "../../components/SidePanel/sidePanel";
import RegistrationForm from "../../components/Registration/registration";
import TopBar from "../../components/TopBar/topBar";
import { useSelector } from "react-redux";

export default function Registration(){
    const userType = useSelector((state) => state.homeReducer.role); 
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

    const employeeTypesSupervisor = [
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
                {userType=="postmaster"?
                    <RegistrationForm employeeTypes={employeeTypesPostmaster}/>
                    :
                    <RegistrationForm employeeTypes={employeeTypesSupervisor}/>
                }
            </Nav>
        </div>
    )
}
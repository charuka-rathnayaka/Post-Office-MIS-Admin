import React from "react";
import Nav from "../../components/SidePanel/sidePanel";
import RegistrationForm from "../../components/Registration/registration";
import TopBar from "../../components/TopBar/topBar";
export default function Registration(){
    
    
   
    return(
        <div style={{backgroundColor: "#fab8b6"}}>
            <Nav>
                <TopBar page="Dashboard"/>
                
                <RegistrationForm></RegistrationForm>
            </Nav>
        </div>
    )
}
import { Grid } from "@material-ui/core";
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import MailTransfer from "../../components/MailTransfer/mailTransfer";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import { getTransfers } from "./mailTransfersActions";
import { useSelector } from "react-redux";

export default function MailTransfers(){
    const dispatch= useDispatch();
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const transferReducer = useSelector((state) => state.MailTransfersReducer);
    useEffect(()=>{
        dispatch(getTransfers(1001))
      },[dispatch,postOffice])
    
    return(
        <Nav>
            <TopBar page="Mail Transfers"/>
            
            <Grid container direction="column" style={{marginTop:"50px"}}>
                {(transferReducer.dataRetreived==true && transferReducer.isLoading==false)?(
                transferReducer.transfers.map((transfer)=>(
                    <Grid item style={{maxWidth:"1000px",marginLeft:"60px",marginBottom:"30px"}}>
                        <MailTransfer transfer={transfer}></MailTransfer>
                    </Grid>
                ))):
                null}
                
            </Grid>
        </Nav>
    )
}
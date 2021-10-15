import { Grid } from "@material-ui/core";
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import MailTransfer from "../../components/MailTransfer/mailTransfer";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import { getTransfers,confirmTransfer } from "./mailTransfersActions";
import { useSelector } from "react-redux";
import { SubmitButton } from "./mailTransfersStyles";
import { CircularProgress} from "@material-ui/core";


export default function MailTransfers(){
    const dispatch= useDispatch();
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const transferReducer = useSelector((state) => state.MailTransfersReducer);
    useEffect(()=>{
        dispatch(getTransfers(1001))
      },[dispatch,postOffice])
    
    function confirmTransfers(transfers){
        dispatch(confirmTransfer(transfers))
    }
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
                (
                    <Grid
                        container
                        alignItems="center"
                        style={{ marginTop: "15%",marginLeft:"45%" }}
                    >
                        <Grid item>
                        <CircularProgress size={60} color="secondary" />
                        </Grid>
                    </Grid>
                )}                
            </Grid>
            {(transferReducer.dataRetreived==true && transferReducer.isLoading==false && (transferReducer.transfers.length)>0)?(
            <Grid container justifyContent="center" direction="column">
                <Grid item>
                    <SubmitButton
                        variant="contained"
                        color="#63231c"
                        disableElevation
                        type="submit"
                        onClick={()=>confirmTransfers(transferReducer.transfers)}        
                        >
                        CONFIRM TRANSFERS
                    </SubmitButton>
                </Grid>
                {(transferReducer.confirmationRequested==true)?(
                    <CircularProgress size={20} color="secondary" />
                
                ):((transferReducer.confirmationSuccessfull==true)?(
                    <span style={{color:"green"}}>Confirmation Successfull</span>
                ):((transferReducer.confirmationSuccessfull==true)?(
                     <span style={{color:"red"}}>Confirmation Unsuccessfull</span>
                ):null)
                )}

            </Grid>):(transferReducer.dataRetreived==true && transferReducer.isLoading==false)?<span style={{color:"red"}}>No Transfer Data to display</span>:
            null}
        </Nav>
    )
}
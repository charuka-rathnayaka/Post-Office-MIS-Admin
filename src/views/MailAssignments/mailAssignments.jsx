import React,{useEffect,useState} from "react";
import MailAssignment from "../../components/MailAssignment/mailAssignment";
import Nav from "./../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import { useDispatch, useSelector } from "react-redux";
import { getMails,submitMailAssignments } from "./mailAssignmentsActions";
import { CircularProgress, Grid } from "@material-ui/core";
import { SubmitButton ,useStyles} from "./mailAssignmentsStyles";

export default function MailAssignments(){
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const mailAssignmentsReducer = useSelector((state) => state.MailAssignmentsReducer);
    const [submitted, setSubmitted] = useState(false); 
    const dispatch = useDispatch();
    const classes=useStyles();
    useEffect(()=>{
      dispatch(getMails(postOffice))
    },[dispatch,postOffice,submitted])

    function confirmAssignments(){
        dispatch(submitMailAssignments(mailAssignmentsReducer.assignments));
        setSubmitted(!submitted)
    }
    return (
        <Nav>
            <TopBar page="Mail Assignments"/>
            {(mailAssignmentsReducer.isLoading==false && mailAssignmentsReducer.dataRetreived==true)?
                <div style={{marginTop:"20px",marginLeft:"20px",marginRight:"20px"}}>
                    <MailAssignment data={mailAssignmentsReducer} />
                    <Grid container justifyContent="center" style={{marginTop:"20px"}} direction="column">
                        <Grid item>
                            <SubmitButton
                                variant="contained"
                                color="#63231c"
                                disableElevation
                                onClick={()=>(confirmAssignments())}                       
                                >
                                    CONFIRM MAIL ASSIGNMENTS
                            </SubmitButton>
                        </Grid>
                        <Grid item>
                                <span>
                                    {(mailAssignmentsReducer.submitRequested==false && mailAssignmentsReducer.submitSuccess==false && mailAssignmentsReducer.submitFailure==true) ? (
                                        <p className={classes.errorTextMsg}>Submission Unsuccessfull Try Again</p>
                                    ) : null}
                                    {(mailAssignmentsReducer.submitRequested==false && mailAssignmentsReducer.submitSuccess==true && mailAssignmentsReducer.submitFailure==false) ? (
                                        <p className={classes.successText}>Submission Successfull</p>
                                    ) : null}
                                    {(mailAssignmentsReducer.submitRequested==true && mailAssignmentsReducer.submitSuccess==false && mailAssignmentsReducer.submitFailure==false) ? (
                                        <p className={classes.loadingText}>Submission in progress..........</p>
                                    ) : null}
                                </span>
                        </Grid>
                    </Grid>
                </div>
            :((mailAssignmentsReducer.isLoading==true && mailAssignmentsReducer.dataRetreived==false)?
            (<Grid
                container
                alignItems="center"
                style={{ marginTop: "25%",marginLeft:"45%" }}
            >
                <Grid item>
                <CircularProgress size={60} color="secondary" />
                </Grid>
            </Grid>):
            ( <p style={{color:"red",textAlign:"center",marginTop: "25%",marginLeft:"45%"}}>Error Occured: Please try again later</p>)
            )
            }
            
        </Nav>
    )
}
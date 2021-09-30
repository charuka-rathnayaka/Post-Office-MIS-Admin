import React from "react";
import { useStyles,SubmitButton } from "./complainStyles";
import { Grid } from "@material-ui/core";
import { useDispatch,useSelector} from "react-redux";
import { markSolvedRequest,complainsDataRequest } from "../../views/Complains/complainsActions";
    

export default function ComplainComponent(complain){
    const dispatch = useDispatch();
    const classes=useStyles();
    const complainData=complain.complain;
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    async function markAsSolved(){
        dispatch(markSolvedRequest(complainData.complainID));
        dispatch(complainsDataRequest(postOffice))
    }
    return(
        <div className={classes.form}>
            <Grid container direction="column" >
                <Grid item style={{marginTop:"10px"}}>

                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item>
                            <Grid container direction="row" style={{marginLeft:"10px"}}>
                                <Grid item>
                                    <div className={classes.fieldLabel}>Name: </div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.fieldValue} data-testid="name-id">{complainData.name}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" style={{marginRight:"10px"}}>
                                <Grid item>
                                    <div className={classes.fieldLabel}>PID: </div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.fieldValue}>{complainData.pid} </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item style={{marginTop:"10px"}}>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item>
                            <Grid container direction="row">
                                    <Grid item>
                                        <div className={classes.fieldLabel} style={{marginLeft:"10px"}}>Email: </div>
                                    </Grid>

                                    <Grid item>
                                        <div className={classes.fieldValue}>{complainData.email}</div>
                                    </Grid>
                                </Grid>
                            </Grid>

                        <Grid item>
                            <Grid container direction="row">
                                    <Grid item>
                                        <div className={classes.fieldLabel}>Contact Number: </div>
                                    </Grid>

                                    <Grid item>
                                        <div className={classes.fieldValue}>{complainData.contactNumber} </div>
                                    </Grid>
                                </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction="row" style={{marginRight:"10px"}}>
                                <Grid item>
                                    <div className={classes.fieldLabel}>Date: </div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.fieldValue}>{complainData.date}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                
                <Grid item style={{ marginTop:"10px"}}>
                    <Grid container direction="row" >
                        <Grid item>
                            <Grid container direction="row" style={{marginLeft:"10px"}}>
                                <Grid item>
                                    <div className={classes.fieldLabel}>Content: </div>
                                </Grid>

                                <Grid item>
                                    <div className={classes.fieldValue}>{complainData.message}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    
                </Grid>


                <Grid item style={{marginTop:"10px"}}>
                    <div className={classes.button}>
                        <SubmitButton
                            variant="contained"
                            color="#63231c"
                            className={classes.loginButton}
                            disableElevation
                            type="submit"
                            onClick={()=>markAsSolved()}        
                            >
                                MARK AS RESOLVED
                        </SubmitButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

/*<Grid item>
    <div data-testid="title-id" className={classes.title}>Title:-</div>
</Grid>*/


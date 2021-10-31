import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./errorStyles";



export default function AuthError(data){
    console.log("data - ",data)
    const classes=useStyles()
    const errorCode=data.errorCode;
    const errorMessage=data.errorMessage;
    return(
        <Container>
            <Grid container direction="column" justifyContent="center">
                <Grid item className={classes.logocontainer}>
                    <div > 
                        <img 
                        src="/App_Icon.png"
                        style={{ width: 220, height: 80,color:"white" }}
                        alt="Logo"
                        />
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.errorCode}>Error: {errorCode}</div>
                </Grid>
                    
                <Grid item>
                    <div className={classes.errorMessage}>{errorMessage}</div>
                </Grid>

                
            </Grid>
        </Container>
    )
}
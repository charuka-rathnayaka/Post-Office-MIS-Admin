import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';

function DateFramePicker(props){
    const { startDate, setStartDate, startLabel, endDate, setEndDate, endLabel } = props;
    const [startDateError, setStartDateError] = React.useState("");
    const [endDateError, setEndDateError] = React.useState("");
    // console.log("eerror 1 -",startDateError)
    // console.log("chec- ",startDate<=endDate)
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="row" justifyContent="space-evenly"  spacing={3}>
            <Grid item>
            <Grid container direction="column">
                <Grid item>
                    <KeyboardDatePicker
                    autoOk
                    disableFuture
                    disableToolbar
                    inputVariant="filled"
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={startLabel}
                    value={startDate}
                    error={false}
                    helperText={null}
                    onError={setStartDateError}
                    onChange = {(event, newValue, previousValue, name) => {
                        if(event=="Invalid Date"){
                        setStartDateError("Invalid Date");
                    
                        }else{
                        if(event!==null && (event<=endDate)){
                            
                            setStartDateError("")
                            setStartDate(event)
                           
                        }
                        else{
                            setStartDateError("Invalid Date");
                        }
                        } 
                        }}
                    InputProps={{
                        disableUnderline: true,
                        // readOnly: true,
                    }}
                    />
                
                </Grid>
                <Grid item >
                    <span style={{ color:"red",textAlign:"left"}}>{startDateError.length>0?"Invalid Start date":null}</span>
                </Grid>
            </Grid>
            </Grid>
        
        <Grid item>
        <Grid container direction="column">
            <Grid item>
                <KeyboardDatePicker
                autoOk
                disableFuture
                disableToolbar
                inputVariant="filled"
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date2-picker-inline"
                label={endLabel}
                value={endDate}
                error={false}
                helperText={null}
                onError={setEndDateError}
                onChange = {(event, newValue, previousValue, name) => {
                    if(event=="Invalid Date"){ 
                    setEndDateError("Invalid Date")  
                    }else{
                    if(event!==null && (event>=startDate)){
                        setEndDateError("")
                        setEndDate(event)
                    }
                    else{
                        setEndDateError("Invalid Date");
                    }
                    } 
                    }}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
                InputProps={{
                    disableUnderline: true
                }}
                />
            </Grid>
            <Grid item >
                <span style={{ color:"red",textAlign:"left"}}>{endDateError.length>0?"Invalid End date":null}</span>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
export default DateFramePicker;
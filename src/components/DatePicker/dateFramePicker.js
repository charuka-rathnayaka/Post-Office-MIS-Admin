import React,{useEffect} from "react";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
//import {performanceDataRequest} from "../../views/Home/Dashboard/dashboardActions";
import { useDispatch,useSelector} from "react-redux";

function DateFramePicker(props){
    const { startDate, setStartDate, startLabel, endDate, setEndDate, endLabel } = props;
    console.log("prps ",props)
    //const postOffice = useSelector((state) => state.homeReducer.postOffice);
    const [startDateError, setStartDateError] = React.useState("");
    const [endDateError, setEndDateError] = React.useState("");
    console.log("out - ",startDate)
   /* console.log("fram - ",startDate,endDate);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(performanceDataRequest(startDate,endDate,postOffice))
    },[dispatch,startDate,endDate,postOffice]);
    const handleStartDateChange = (date) => {
        console.log("handle start",date,startDate,endDate)
        if(date<endDate){
            setStartDate(date);
        }
        else{
            setStartDateError("Invalid Date")
        }
      };

    const handleEndDateChange = (date) => {
        console.log("handle end",date,startDate,endDate)
        setEndDate(date);
      };*/
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="row" justifyContent="space-evenly"  spacing={3}>
            <Grid item>
            <Grid container direction="column">
                <Grid item>
                <KeyboardDatePicker
                    disableFuture
                    disableToolbar
                    inputVariant="filled"
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date1-picker-inline"
                    label={startLabel}
                    value={startDate}
                    error={false}
                    helperText={null}
                    onError={setStartDateError}
                    onChange = {(event, newValue, previousValue, name) => {
                        if(event=="Invalid Date"){ 
                            setStartDateError("Invalid Date")  
                        }else{
                        if(event!==null){
                            setStartDateError("")
                            setStartDate(event)
                        }
                        else{
                            setStartDateError("Invalid Date");
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
                    <span style={{ color:"red",textAlign:"left"}}>{startDateError.length>0?"Invalid Start date":null}</span>
                </Grid>
            </Grid>
            </Grid>
        
        <Grid item>
        <Grid container direction="column">
            <Grid item>
            <KeyboardDatePicker
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
                    if(event!==null){
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
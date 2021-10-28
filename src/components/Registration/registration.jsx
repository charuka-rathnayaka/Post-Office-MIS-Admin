import React, {useContext, useEffect, useState } from "react";
import {
    IconButton,
    InputAdornment,
    TextField,
    withStyles,
    withWidth,
    Grid,
  } from "@material-ui/core";
  import Visibility from "@material-ui/icons/Visibility";
  import VisibilityOff from "@material-ui/icons/VisibilityOff";
  import { useDispatch, useSelector } from "react-redux";
  import { useFormik } from "formik";
  import {useStyles,styles,LoginButton} from "./registrationStyles";
  import {addEmployee} from "../../views/Registration/registrationAction";
  import { MenuItem } from '@material-ui/core';


function RegistrationForm(data){
    const classes=useStyles()
    const newClasses=styles()
    const { error } = [];
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.homeReducer.currentUserID);
    const registrationReducer = useSelector((state) => state.registrationReducer);     
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const idToken=useSelector((state) => state.loginReducer.idToken);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
    const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
    const handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email field is required";
        } 
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
        if(!values.firstName){
            errors.firstName = "First name is required";
        }if(!values.lastName){
            errors.lastName = "Last name is required";
        }
        if(!values.contactNumber){
            errors.contactNumber = "Contact Number is required";
        }
        if(!values.nic){
            errors.nic = "NIC is required";
        }
        if(!values.password2){
            errors.password2 = "Password confirmation is required";
        }
        if(values.password2!=values.password1){
            errors.password2 = "Password confirmation is incorrect";
        }
        if(!values.role){
            errors.role = "Employee role is required";
        }
        
        if (!values.password1) {
          errors.password1 = "Password field is required";
        } else if (values.password1.length < 6) {
          errors.password1 = "Password should contain atleast 6 characters";
        }
        return errors;
      };
    
    
    
      const formik = useFormik({
        initialValues: {
          email: "",
          password1: "111111",
          firstName:"",
          lastName:"",
          contactNumber:"",
          nic:"",
          password2:"111111",
          postOffice:postOffice,
          role:"",
          userID:userID
        },
        validate,
        onSubmit: (values) => {
          formik.touched.email = false;
          formik.touched.password1 = false;
          formik.touched.firstName=false;
          formik.touched.lastName=false;
          formik.touched.contactNumber=false;
          formik.touched.nic=false;
          formik.touched.password2=false;
          formik.touched.role=false;
          dispatch(addEmployee(values,idToken));
        },
      });

    return(
        <div className={classes.Form}>
            <Grid container alignItems={"center"} >
                <Grid item > 
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee Firstname</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="text"
                                    name="firstName"                                 
                                    onChange={formik.handleChange} 
                                    value={formik.values.firstName}
                                    onBlur={formik.handleBlur}
           
                                />
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.firstName && formik.errors.firstName !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.firstName}</p>
                                ) : null}
                                {formik.errors.firstName === undefined && !formik.touched.firstName ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>



                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee Lastname</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="text"
                                    name="lastName"                                 
                                    onChange={formik.handleChange} 
                                    value={formik.values.lastName}
                                    onBlur={formik.handleBlur}
           
                                />
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.lastName && formik.errors.lastName !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.lastName}</p>
                                ) : null}
                                {formik.errors.lastName === undefined && !formik.touched.lastName ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>


                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee Type</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"                    
                                    name="role"                                 
                                    onChange={formik.handleChange}
                                    select 
                                    label="Employee Type" 
                                >
                                    {data.employeeTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.role && formik.errors.role !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.role}</p>
                                ) : null}
                                {formik.errors.role === undefined && !formik.touched.role ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>


                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee Contact Number</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="text"
                                    name="contactNumber"                                 
                                    onChange={formik.handleChange} 
                                    value={formik.values.contactNumber}
                                    onBlur={formik.handleBlur}
           
                                />
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.contactNumber && formik.errors.contactNumber !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.contactNumber}</p>
                                ) : null}
                                {formik.errors.contactNumber=== undefined && !formik.touched.contactNumber ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>

                        
                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee NIC Number</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="text"
                                    name="nic"                                 
                                    onChange={formik.handleChange} 
                                    value={formik.values.nic}
                                    onBlur={formik.handleBlur}
           
                                />
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.nic && formik.errors.nic !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.nic}</p>
                                ) : null}
                                {formik.errors.nic === undefined && !formik.touched.nic ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>



                        <Grid container direction ="row" spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Employee Email</div>
                            </Grid>
                            <Grid item className={classes.Input} >
                                <TextField
                                    fullWidth 
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="email"
                                    name="email"                                 
                                    onChange={formik.handleChange} 
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
           
                                />
                            </Grid>

                            <Grid item className={classes.ErrorText}>
                                <span>
                                {formik.touched.email && formik.errors.email !== undefined ? (
                                    <p className={classes.errorText}>{formik.errors.email}</p>
                                ) : null}
                                {formik.errors.email === undefined && !formik.touched.email ? (
                                    <p className={classes.errorText}>{error}</p>
                                ) : null}
                                </span>
                            </Grid>

                        </Grid>
                            
                        <Grid container spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div>Password</div>
                            </Grid>
                            <Grid item className={classes.Input}>
                                    <TextField
                                        fullWidth 
                                        id="outlined-basic"
                                        variant="outlined"
                                        name="password1"
                                        type={showPassword1 ? "text" : "password"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password1}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                            {formik.values.password1 !== "" ? (
                                                <IconButton
                                                style={{ color: "#090726" }}
                                                id="iconButton"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword1}
                                                onMouseDown={handleMouseDownPassword1}
                                                >
                                                {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            ) : (
                                                <p />
                                            )}
                                            </InputAdornment>
                                        ),
                                        
                                        }}
                                    />
                                </Grid>
                                <Grid item className={classes.ErrorText}>
                                    <span>
                                        {formik.touched.password1 && formik.errors.password1 !== undefined ? (
                                            <span><p className={classes.errorText}>{formik.errors.password1}</p></span>
                                        ) : null}
                                    </span>
                                </Grid>
                            </Grid>  



                            <Grid container spacing={5} className={classes.InputLine}>
                            <Grid item className={classes.InputLabel}>
                                    <div> Confirm Password</div>
                            </Grid>
                            <Grid item className={classes.Input}>
                                    <TextField
                                        fullWidth 
                                        id="outlined-basic"
                                        variant="outlined"
                                        name="password2"
                                        type={showPassword2 ? "text" : "password"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password2}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                            {formik.values.password2 !== "" ? (
                                                <IconButton
                                                style={{ color: "#090726" }}
                                                id="iconButton"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword2}
                                                onMouseDown={handleMouseDownPassword2}
                                                >
                                                {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            ) : (
                                                <p />
                                            )}
                                            </InputAdornment>
                                        ),
                                        
                                        }}
                                    />
                                </Grid>
                                <Grid item className={classes.ErrorText}>
                                    <span>
                                        {formik.touched.password2 && formik.errors.password2 !== undefined ? (
                                            <span><p className={classes.errorText}>{formik.errors.password2}</p></span>
                                        ) : null}
                                    </span>
                                </Grid>
                            </Grid> 


                            <Grid container direction="column" style={{marginBelow:"50px"}}>
                                <Grid item>
                                     <span>
                                    {(registrationReducer.isRequested==false && registrationReducer.requestSuccessful==false && registrationReducer.requestUnSuccessful==true) ? (
                                        <p className={classes.errorTextMsg}>Registration Unsuccessfull Try Again</p>
                                    ) : null}
                                    {(registrationReducer.isRequested==false && registrationReducer.requestSuccessful==true && registrationReducer.requestUnSuccessful==false) ? (
                                        <p className={classes.successText}>Registration Successfull</p>
                                    ) : null}
                                    {(registrationReducer.isRequested==true && registrationReducer.requestSuccessful==false && registrationReducer.requestUnSuccessful==false) ? (
                                        <p className={classes.loadingText}>Registering..........</p>
                                    ) : null}
                                    </span>
                                </Grid>
                                <Grid item>
                                    <LoginButton
                                        variant="contained"
                                        color="#63231c"
                                        className={classes.loginButton}
                                        disableElevation
                                        type="submit"
                                        
                                    >
                                        REGISTER EMPLOYEE
                                    </LoginButton>
                                </Grid>
                            </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default RegistrationForm;
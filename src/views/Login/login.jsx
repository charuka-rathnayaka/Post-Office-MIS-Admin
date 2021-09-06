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
import { LoginButton, styles, useStyles } from "./loginStyles.js";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginRequest } from "./loginActions.js";
import { AuthContext } from "../../auth/auth.js";
import { Redirect } from "react-router";

function Login(props) {
  const { currentUser } = useContext(AuthContext);
  const newClasses = useStyles();
  const data = useSelector((state) => state.loginReducer); 
  const [showPassword, setShowPassword] = useState(false);
  const { classes } = props;
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const { error } = [];
  const dispatch = useDispatch();
  // console.log("state = ", data);
  
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password field is required";
    } else if (values.password.length < 6) {
      errors.password = "Password should contain atleast 6 characters";
    }
    return errors;
  };



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      formik.touched.email = false;
      formik.touched.password = false;
      dispatch(loginRequest(values));
    },
  });
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.LoginPage}>
    <Grid container alignItems={"center"} justify={"center"}>
      <Grid
        item
        className={props.width !== "xs" ? classes.boxMain : classes.boxMainXs}
      > 
      <div className={classes.logocontainer}> 
        <img 
          src="/App_Icon.png"
          style={{ width: 220, height: 80,color:"white" }}
          alt="Logo"
        />
    </div>
        <h2 className={classes.title}>Management System Login</h2>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            id="filled-basic"
            fullWidth
            label="Enter Email...."
            variant="filled"
            type="email"
            name="email"
            InputProps={{
              // disableUnderline,
              classes: {
                underline: classes.underline,
                root: classes.root,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
              },
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email !== undefined ? (
            <p className={newClasses.errorText}>{formik.errors.email}</p>
          ) : null}
          {formik.errors.email === undefined && !formik.touched.email ? (
            <p className={newClasses.errorText}>{error}</p>
          ) : null}

          <TextField
            variant="filled"
            fullWidth
            label="Enter Password...."
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formik.values.password !== "" ? (
                    <IconButton
                      style={{ color: "red" }}
                      id="iconButton"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ) : (
                    <p />
                  )}
                </InputAdornment>
              ),
              classes: {
                underline: classes.underline,
                root: classes.password,
              },
            }}
          />
          <Grid container direction="column">
          <Grid item>
          {formik.touched.password && formik.errors.password !== undefined ? (
            <span><p className={newClasses.errorText}>{formik.errors.password}</p></span>
          ) : null}
          </Grid>
          <Grid item>
          <LoginButton
            variant="contained"
            color="#63231c"
            className={classes.loginButton}
            disableElevation
            type="submit"
            
          >
            LOGIN
          </LoginButton>
          </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
    </div>
  );
}

export default withWidth()(withStyles(styles)(Login));

import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addPostStart} from "../../views/RecepFunc/recepActions";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Formik, useFormik } from 'formik';
// import combinedReducers from "../../rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { Provider } from "react-redux";

// const sagaMiddleware = createSagaMiddleware();

// const NormalFormWrapper = () => {
//     const store = createStore(combinedReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
  
//     return (
//       <Provider store={store}> 
//         <NormalForm /> 
//       </Provider>
//     )
// }

const useStyles = makeStyles((theme) => ({
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

function NormalForm({postOffice}) {
    //console.log("postOffice",postOffice);
    //let today=new Date();
    //let year=today.getFullYear();
    //let month=today.getMonth()+1;
    //let day=today.getDate();
    //let tod=year.toString(10).slice(-2)+(("0"+month.toString(10)).slice(-2))+(("0"+day.toString(10)).slice(-2));
    //let num='';
    //var store=require('store');

    const dispatch = useDispatch();  
    // const longitude=postOffice[0].location._long;
    // const latitude=postOffice[0].location._lat;
    //const POcode=postOffice.map((option)=>(option.code));
    const userID = useSelector((state)=>state.homeReducer.currentUserID);   
    //const Pid=tod+POcode[0]+POcode[1];
    
    const initialState=useFormik({
        initialValues:{  
            recipientName:"",
            recipientAddressNo:"",
            recipientStreet1:"",
            recipientStreet2:"",
            recipientCity:"",
            cost:"",
            employee:userID,
            acceptedPostOffice:"",
            destinationPostOffice:"",
                
        },
        onSubmit:(values,{resetForm})=>{
            // if ((store.get("pid")==null)||(store.get('pid').date!==tod)){
            //     store.set("pid",{date:tod,number:'0001'});
            //     num='0001';
            // }else{
            //     num=('0000'+(parseInt(store.get('pid').number)+1).toString()).slice(-4);
            //     store.set("pid",{date:tod,number:num});
            // }    
            initialState.touched.recipientName=false;
            initialState.touched.recipientAddressNo=false;
            initialState.touched.recipientStreet1=false;
            initialState.touched.recipientStreet2=false;
            initialState.touched.recipientCity=false;
            initialState.touched.cost=false;
            initialState.touched.pid=false;
            initialState.touched.employee=false;
            initialState.touched.acceptedPostOffice=false;
            initialState.touched.destinationPostOffice=false;
            initialState.touched.long=false;
            initialState.touched.lat=false;
            dispatch(addPostStart(initialState));
            resetForm({})
        }
    });
    
    //console.log(initialState);
    
    const classes = useStyles();
    
     
                        
    
    return ( 
        <>
            <Formik>
                
                <Container role="combobox" maxWidth="sm">
                    <h1>Normal Post</h1>
                    <form  data-testid="normal-form" className="form" onSubmit={initialState.handleSubmit}>                            
                        <div className="form-group-recipientName">
                            <TextField
                                required
                                data-testid="recipientName"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientName"
                                value={initialState.values.recipientName}
                                onChange={initialState.handleChange}
                                style={{ margin: 8 }}
                                placeholder="Recipient's Name"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group-recipientAddressNo">
                            <TextField
                                required
                                data-testid="recipientAddressNo"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientAddressNo"
                                value={initialState.values.recipientAddressNo}
                                onChange={initialState.handleChange}
                                
                                style={{ margin: 8 }}
                                placeholder="Recipient's Address No"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group-recipientStreet1">
                            <TextField
                                required
                                data-testid="recipientStreet1"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientStreet1"
                                value={initialState.values.recipientStreet1}
                                onChange={initialState.handleChange}
                                
                                style={{ margin: 8 }}
                                placeholder="Recipient's Street 1"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group-recipientStreet2">
                            <TextField
                                
                                
                                
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientStreet2"
                                value={initialState.values.recipientStreet2}
                                
                                onChange={initialState.handleChange}
                                data-testid="recipientStreet2"
                                style={{ margin: 8 }}
                                placeholder="Recipient's Street 2"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group-recipientCity">
                            <TextField
                                required
                                
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientCity"
                                value={initialState.values.recipientCity}
                                onChange={initialState.handleChange}
                                data-testid="recipientCity"
                                style={{ margin: 8 }}
                                placeholder="Recipient's City"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group-cost">
                            <TextField
                                required
                               
                                label="required"
                                variant="filled"
                                type="number"
                                className="form-control"
                                name="cost"
                                value={initialState.values.cost}
                                onChange={initialState.handleChange}
                                data-testid="cost"
                                style={{ margin: 8 }}
                                placeholder="Cost"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        
                        <FormControl variant="filled" fullWidth required className={classes.formControl}placeholder="acceptedPostOffice">
                            <InputLabel id="acceptedPostOffice">Accepted PostOffice</InputLabel>
                            
                            <Select
                            key={initialState.values.acceptedPostOffice.city}
                            label="acceptedPostOffices"
                            data-testid={initialState.values.acceptedPostOffice.city}
                            name="acceptedPostOffice"
                            value={initialState.values.acceptedPostOffice}
                            onChange={initialState.handleChange}
                            placeholder="Accepted PostOffice"
                            
                            >
                            
                            {postOffice.map((option)=> (
                                <MenuItem value={option} key={option.code}>{option.city}</MenuItem>
                            ))}
                            
                            </Select>
                           
                        </FormControl><br/>
                        
                        <FormControl variant="filled" fullWidth required className={classes.formControl}>
                            <InputLabel id="destinationPostOffice">Destination PostOffice</InputLabel>
                            
                            <Select
                            key={initialState.values.destinationPostOffice}
                            labelId="destinationPostOffice"
                            data-testid={initialState.values.destinationPostOffice}
                            name="destinationPostOffice"
                            value={initialState.values.destinationPostOffice}
                            onChange={initialState.handleChange}
                            placeholder="Destination PostOffice"
                            >
                            
                            {postOffice.map((option)=> (
                                <MenuItem value={option.code} label={option.city}>{option.city}</MenuItem>
                            ))}
                            
                            </Select>
                           
                        </FormControl><br/>
                            
                        <Button type="submit"  variant="contained"color="secondary" value="add">Submit</Button>
                        <br/><br/>
                    </form>

                </Container>
            </Formik>
        </>
     );
     
                            
    
}

export default NormalForm;
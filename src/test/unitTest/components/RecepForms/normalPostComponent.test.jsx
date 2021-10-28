import React from 'react';
import { render, screen, waitFor, within, fireEvent,wait } from '@testing-library/react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NormalPost from '../../../../components/RecepForms/normalPost';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import combinedReducers from "../../../../rootReducer";
import user from '@testing-library/user-event';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Formik } from 'formik';
import { act } from 'react-dom/test-utils';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('Normal post', () => {
  it('submits values and fires', async()=>{
    const mock =jest.fn();
    const postOffice=[{code:'1001',city:"Matara",location:{_lat:5.567787,_long:6.43456}},{code:'1002',city:"Colombo",location:{_lat:5.567787,_long:6.43456}}]
    const initialState={
      recipientName:"",
            recipientAddressNo:"",
            recipientStreet1:"",
            recipientStreet2:"",
            recipientCity:"",
            cost:"",
            employee:"JA153huj79",
            acceptedPostOffice:"",
            destinationPostOffice:"",
    }
    const {getByText,getByTestId}=render(
    <Formik initialValues={initialState} onSubmit={mock}>
                
      <Container data-testid="container" maxWidth="sm">
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
                      value={initialState.recipientName}
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
                      value={initialState.recipientAddressNo}
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
                      value={initialState.recipientStreet1}
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
                      value={initialState.recipientStreet2}
                      
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
                      value={initialState.recipientCity}
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
                      value={initialState.cost}
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
              
              <FormControl variant="filled" fullWidth className="formControl"placeholder="acceptedPostOffice">
                  <InputLabel id="acceptedPostOffice">Accepted PostOffice</InputLabel>
                  
                  <Select
                  key={initialState.acceptedPostOffice.city}
                  label="acceptedPostOffices"
                  data-testid={initialState.acceptedPostOffice.city}
                  name="acceptedPostOffice"
                  value={initialState.acceptedPostOffice}
                  onChange={initialState.handleChange}
                  placeholder="Accepted PostOffice"
                  
                  >
                  
                  {postOffice.map((option)=> (
                      <MenuItem value={option} key={option.code}>{option.city}</MenuItem>
                  ))}
                  
                  </Select>
                 
              </FormControl><br/>
              
              <FormControl variant="filled" fullWidth className="formControl">
                  <InputLabel id="destinationPostOffice">Destination PostOffice</InputLabel>
                  
                  <Select
                  key={initialState.destinationPostOffice}
                  labelId="destinationPostOffice"
                  data-testid={initialState.destinationPostOffice}
                  name="destinationPostOffice"
                  value={initialState.destinationPostOffice}
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
    </Formik>);

    const Form = await waitFor(()=>getByTestId('normal-form'));
    const recipientName=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's Name"));
    const recipientAddressNo=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's Address No"));
    const recipientStreet1=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's Street 1"));
    const recipientStreet2=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's Street 2"));
    const recipientCity=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's City"));
    const cost=await waitFor(()=>within(Form).getByPlaceholderText("Cost"));
    //const acceptedPostOffice=await waitFor(()=>within(Form).getByPlaceholderText("Recipient's Name"));
    const button= await waitFor(()=>getByText('Submit'));
    fireEvent.change(recipientName,{target:{
      value:'Charitha',
    }})
    fireEvent.change(recipientAddressNo,{target:{
      value:'34/10',
    }})
    fireEvent.change(recipientStreet1,{target:{
      value:'Parakrama',
    }})
    fireEvent.change(recipientStreet2,{target:{
      value:'Welegoda Center',
    }})
    fireEvent.change(recipientCity,{target:{
      value:'Colombo',
    }})
    fireEvent.change(cost,{target:{
      value:10,
    }})
    fireEvent.click(button);
    await waitFor(() => {
      expect(mock).toBeCalled()
    })
    })
    
})
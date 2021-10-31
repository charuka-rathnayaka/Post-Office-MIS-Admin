import React from 'react';
import { useStyles } from './profileModalStyles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid } from "@material-ui/core";


export default function ProfileModal(props) {
  const classes = useStyles();
  const open=props.open;
  const setOpen=props.setOpen;
  // console.log("props ",open,setOpen,props)
  const userDetails=props.userDetails;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <AccountCircle  cstyle={{backgroundColor: 'white'}} style={{ fontSize: 70 }}/>
                </Grid>
                <Grid item>
                    <div className={classes.role}>{userDetails.role}</div>
                </Grid>
                <Grid item style={{marginTop:"20px"}}>
                    <div className={classes.content}>Name : {userDetails.firstName} {userDetails.lastName}</div>
                </Grid>

                <Grid item>
                    <div className={classes.content}>Contact Number : {userDetails.contactNumber}</div>
                </Grid>

                <Grid item>
                    <div className={classes.content}>NIC : {userDetails.NIC}</div>
                </Grid>

                <Grid item>
                    <div className={classes.content}>Email : {userDetails.currentUserEmail}</div>
                </Grid>

                <Grid item style={{marginBottom:"15px"}}>
                    <div className={classes.content}>ID : {userDetails.currentUserID}</div>
                </Grid>
            </Grid>
          
           
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

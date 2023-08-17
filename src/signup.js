import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Singup=()=>{
    const submitData =()=>{
        navigate('/signin')
    }
    const navigate = useNavigate();
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 this">

                </div>

                <div className="col-md-8">
                    <div className="house d-flex">
                    <img className="pho ms-auto m-4" src="home-button.png"/>
                    </div>
                    <form onSubmit={submitData}>
                    <div className="row m-5">
                    <div className="first">
                   <h2>Signup</h2>
                        <p>Completely Employee-owned, we're driven with a passion</p>
                        </div>
                        <div className="buttons">
                        <button className="sai rounded-pill"><img src="google.png"/>Continue with Google</button>
                        <button className="kiran rounded-pill"><img src="apple.png"/>Continue with Apple</button>
                    </div>

                    <h4><center>Or</center></h4>
      
      <TextField id="standard-basic" label="Enter Your Username or Email" type="email" variant="standard" required/><br/><br/><br/><br/>
      <TextField id="standard-basic" label="Enter Your Password" type="password" variant="standard" required /><br/><br/><br/><br/>
      <TextField id="standard-basic" label="Enter Your Password" type="password" variant="standard" required /><br/><br/><br/><br/>

                    
                    <p className="for">Forgotten Password</p><br/><br/><br></br>
                    <div className="hello d-flex pt-4">
                        <div className="phto2 ms-auto">
                            <Link to="/signin"><button  className="button btn btn">Sign in</button></Link>
                            <button  type="submit" className="btn btn-primary">continue</button>
                        </div><br/><br/>
                    </div>
                 </div>
                 </form>
                 </div>

            </div>
        </div>
    );
}


export default Singup;
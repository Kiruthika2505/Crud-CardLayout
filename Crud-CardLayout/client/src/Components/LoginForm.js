import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export function LoginForm(){    
    const handlesubmit=async(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config= {headers:{"enctype":"multipart/form-data"}};
    
           await axios.post('http://localhost:3002/LoginForm',datastring,config)
           .then(function(res){
             if(res.data.status === 'error'){
                 alert('Invalid details');
                 window.location.reload();
             }
             else if(res.data.status === 'success'){
                 alert('Inserted');
                 window.location.href="/Dashboard";
             }
           })
           .catch(function(err){
             alert(err);
             window.location.reload();
           })
    } 
    return(   
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>LoginPage</h3>
                </div>
            </div>
            <form onSubmit={handlesubmit}>
            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Username :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="email" id='username' name='username' className='form-control' placeholder='Enter username'/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            
            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Password :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="password" id='password' name='password' className='form-control' placeholder='Enter Password'/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            <div className='col-lg-12 row mt-4'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-1'>
                    <button type="submit" id="submit" name="submit" className='btn btn-primary'>Submit</button>
                </div>
                <Link to='/'><div className='col-lg-2'>
                    <button type="button" id="button" name="button" className="btn btn-danger">GoBack</button>
                </div>
                </Link>
                <div className="col-lg-5">&nbsp;</div>
            </div>
              </form>  
        </div>
        
    )
}
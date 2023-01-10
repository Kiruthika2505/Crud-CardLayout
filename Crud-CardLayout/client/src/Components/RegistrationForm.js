import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export function RegistrationForm(){
    const handlesubmit=async(event)=>{
             event.preventDefault();
             var datastring=new FormData(event.target);
             var config= {headers:{"enctype":"multipart/form-data"}};
         
                await axios.post('http://localhost:3002/RegistrationForm',datastring,config)
                .then(function(res){
                  if(res.data.status === 'error'){
                      alert('error');
                      window.location.reload();
                  }
                  else if(res.data.status === 'Success'){
                      alert('Values are Inserted');
                      window.location.reload();
                  }
                })
                .catch(function(err){
                  alert(err);
                  window.location.reload();
                })
    }
 return(
    <div className='container'>
          
            <div className='row col-lg-12'>
                <div className='col-lg-12 text-center'>
                <h3>Registration Form</h3>
                </div>
            </div>
        <form onSubmit={handlesubmit}>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>First-Name :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="text" id='firstname' name='firstname' className='form-control'  placeholder='Enter Firstname' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Last-Name :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="text" id='lastname' name='lastname' className='form-control'  placeholder='Enter Lastname' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Email :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="email" id='email' name='email' className='form-control' placeholder='Enter Email' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Phone :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="text" id='phone' name='phone' className='form-control' placeholder='Enter Phoneno' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            
            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Password :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="password" id='password' name='password' className='form-control' placeholder='Enter Password' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
    
            <div className='col-lg-12 row mt-4'>
                <div className='col-lg-4'>&nbsp;</div>
                <Link to='/LoginForm'> 
                    <div className='col-lg-4'>
                    <button type="button" id="login" name="login" className='btn btn-primary'>Login</button>
                </div>
                 </Link> 
                <div className='col-lg-4'>
                <button type="submit" id="submit" name="submit" className='btn btn-primary'>Submit</button>
                </div>
            </div>

        </form>
    </div>
 )
}
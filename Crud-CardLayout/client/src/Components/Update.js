import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

export function Update(){

    const {id} = useParams();
    
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{

    fetch("http://localhost:3002/Update/"+id+"")
    .then(response => response.json())
    .then(function(res){
        setFirstname(res[0].firstname);
        setLastname(res[0].lastname);
        setEmail(res[0].email);
        setPhone(res[0].phone);
        setPassword(res[0].password);
    })
    .catch(function(error){
        alert(error);
        window.location.href="/";
    })

    },[])

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
        
        await axios.put('http://localhost:3002/updatedata/'+id+'',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('error');
                        window.location.href="/";
                    }
                    else if(res.data.status === 'Success'){
                        alert('Updated');
                        window.location.href="/";
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.href="/";
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
                    <input type="text" id='firstname' name='firstname' className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder='Enter Firstname' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Last-Name :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="text" id='lastname' name='lastname' className='form-control' value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder='Enter Lastname' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Email :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="email" id='email' name='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='Enter Email' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>

            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Phone :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="text" id='phone' name='phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phoneno' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            
            <div className='row col-lg-12 mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label>Password :</label>
                </div>
                <div className='col-lg-4'>
                    <input type="password" id='password' name='password' className='form-control' value={password} onChange={(e)=>setFirstname(e.target.value)} placeholder='Enter Password' required/>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
    
            <div className="row mt-2">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
                    Update
                </button>
                </div>
            </div>

        </form>
    </div>
 )
}
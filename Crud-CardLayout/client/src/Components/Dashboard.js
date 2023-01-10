import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export function Dashboard(){
    const [data,setData]=useState([]);
    useEffect(()=>{
         fetch('http://localhost:3002/dashboard')
        .then(response=>response.json())
        .then(json=>setData(json))
    },[])

    const data_del = (id) =>{
        var datastring = {id:id};
        var config = {headers:{"enctype":"multipart/form-data"}};
        axios.post('http://localhost:3002/Delete',datastring,config)
        .then(function(res){
            if(res.data.status === 'error'){
                alert('error');
                window.location.reload();
            }
            else if(res.data.status === 'Success'){
                alert('deleted')
                window.location.reload();
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })
    }
    return(
    <div className="container">
        <div className="col-lg-12 text-center">
            <h3>Admin Dashboard</h3>
        </div>
        
        <div className="row col-lg-12 mt-3">
            {   
            data.map((value,index)=>(
            <div className="col-lg-6 ">
                <div className="card">
                <div className="card-title text-center">
                    <h5>Details</h5>
                </div>
                <div className="card-body">
                    <p>{value.id}</p>
                    <p>{value.firstname}</p>
                    <p>{value.lastname}</p>
                    <p>{value.email}</p>
                    <p>{value.phone}</p>
                    <p>{value.password}</p>
                    <p><button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{data_del(value.id)}}>Delete</button>
                    <Link to={"/Update/"+value.id}>
                    <button type="button" name="data_update" id="data_update" className="btn btn-success">Update</button>
                    </Link></p>     
                </div>  
             </div>
             </div>
            )) 
            }
        </div>
       
    </div>
    )
}
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Kiruthi@2505",
    database : "info"
})

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.post('/RegistrationForm',(request,response)=>{

    let {firstname,lastname,email,phone,password} = request.body;

    let sql = 'insert into details(firstname,lastname,email,phone,password) values (?,?,?,?,?)';

    c.query(sql,[firstname,lastname,email,phone,password],(error,result)=>{
        if(error){
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"Success"};
            response.send(s);
        }
    })
})
app.post("/LoginForm",(request,response)=>{
        let {username,password} = request.body;
    
        let sql = 'select * from details where email=?';
    
        c.query(sql,[username,password],(error,result)=>{
            if(error){
                let s = {"status":"syntax_error"};
                response.send(s);
            }
            else if(result.length > 0){
                let email1 = result[0].email;
                let password1 = result[0].password;
                
                if(username === email1 && password1 === password){
                    let s = {"status":"success"};
                    response.send(s);
                }
                else{ 
                    let s = {"status":"Invalid_details"};
                    response.send(s);
                }
            }
            else{       
                let s = {"status":"error"}
                response.send(s);
            }
        })
    
    })

app.get('/dashboard',(request,response)=>{
    let sql='select * from details';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.post('/Delete',(request,response)=>{
    let id = request.body.id;
    let sql = 'delete from details where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Success"};
            response.send(s);
        }
    })
})

app.get('/Update/:id',(request,response)=>{

    let {id} = request.params;

    let sql = 'select * from details where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })

})

app.put('/updatedata/:id',(request,response)=>{
    let {id} = request.params;
    let {firstname,lastname,email,phone,password} = request.body;

    let sql = 'update details set firstname=?,lastname=?,email=?,phone=?,password=? where id=?';

    c.query(sql,[firstname,lastname,email,phone,password,id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Success"}
            response.send(s);
        }
    })

})

app.listen(3002,()=>console.log("Server running on 3002"))


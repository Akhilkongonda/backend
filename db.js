const mysql=require('mysql');

//connecting to data base
const connection =mysql.createConnection({
    host:'192.168.31.134',
    user:'root',
    password:'root1234',
    database:'result_analysis',
    waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
    port:3306
});
//checking if connection is succesful or not
connection.connect((error)=>{
    if(error){
        console.log('error in db',error);
    }
    else{
        console.log('db connection succesful');
    }
    
})

module.exports=connection;



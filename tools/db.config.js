    const mysql= require('mysql');
    const db = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'newlogin'
    });
module.exports=db
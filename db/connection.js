const mysql = require('mysql2'); 

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'Ext187Mv#3', 
    database: 'employees'
}, 
console.log('Connected to the election database!')); 

module.exports = db; 
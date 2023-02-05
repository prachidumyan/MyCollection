const mysql = require('mysql');
//------ Connect Databases ----------
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'easyshop'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// global.db = db;
module.exports = db;
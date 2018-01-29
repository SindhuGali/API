const sqlite3 = require('sqlite3');
var postData = require('../routes/putPost');
let db = new sqlite3.Database('C:\\Users\\ksgha\\Downloads\\blog.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

var title = postData.title;
var body =postData.body;
let sql = `INSERT INTO posts (
 title,body)
VALUES
 ( $1, $2);`;


// first row only
db.get(sql, [title,body],(err, result) => {
    if (err) {
        return console.error(err.message);
    }
    else{
        console.log('inserted ')
    }
});




const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('C:\\Users\\ksgha\\Downloads\\blog.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the  database.');
});
let sql = `SELECT post_id as id,
                 title as Title, body as Body
           FROM posts`;


// first row only
db.get(sql, (err, result) => {
    if (err) {
        return console.error(err.message);
    }
    console.log(JSON.stringify(result));
    module.exports.alldata = JSON.stringify(result);

});




require('dotenv').config()

var mysql = require('mysql');

export const db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password :  process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

db.connect(function(err: any) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log(
    'Connection success! Connected as id ' + db.threadId);
}); 


const mysql = require('mysql2');
const callDB = async() => {
try {
    // create the connection to database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'user01',
      password: 'password01',
      database: 'hello',
    });
  
    // execute will internally call prepare and query
    const [results, fields] = await connection.execute(
      'SELECT * FROM my_user'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
}

callDB();
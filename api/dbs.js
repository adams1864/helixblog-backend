import mysql2 from 'mysql2';

const db = mysql2.createConnection({
  host: 'gondola.proxy.rlwy.net',  // Railway's host
  user: 'root',                     // Railway's user
  password: 'eAfwOqhQfGclqhWaUrfbSlRNdEnYnWSa', // Railway's password
  database: 'railway',               // Railway's database name
  port: 49240,                        // Railway's port
  connectTimeout: 10000               // Increase timeout to 10 seconds
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the Railway MySQL database');
  }
});

export default db;

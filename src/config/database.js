import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || '',
    });
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.pool.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  close() {
    this.pool.end((error) => {
      if (error) {
        console.error('Error closing the database connection:', error);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

export default new Database();

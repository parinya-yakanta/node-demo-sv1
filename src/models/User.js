import Database from "../config/database.js";

class User {
  async getAllUsers() {
    try {
      const sql = "SELECT * FROM users";
      const results = await Database.query(sql);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      const values = [userData.username, userData.email, userData.password];
  
      Database.connection.query(sql, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  }
}

export default new User();

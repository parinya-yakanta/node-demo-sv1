import Database from '../config/database.js';

class Pill {
  async getAllPills() {
    try {
      const sql = "SELECT * FROM pills";
      const results = await Database.query(sql);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async createPill() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Pills';

      Database.connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }

        return resolve(results);
      });
    });
  }


}

export default new Pill();

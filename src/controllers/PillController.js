import Pill from '../models/Pill.js';

class PillController {
  async getAllPills(request, response) {
    try {
      const pills = await Pill.getAllPills();
      return response.json(pills);
    } catch (error) {
      console.error('Error getting pills:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createPill(request, response) {
    try {
      const users = await Pill.createPill();
      return res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default new PillController();

import User from '../models/User.js';

class UserController {
  async getAllUsers(request, response) {
    try {
      const users = await User.getAllUsers();
      return response.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createUser(request, response) {
    try {
      const users = await User.createUser();
      return res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new UserController();

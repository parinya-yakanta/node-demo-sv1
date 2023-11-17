import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { userCreateValidate } from '../validator/auth/userValidate.js';

class AuthController {
  async register(request, response) {
    try {
      const { error, value } = userCreateValidate(request.body);

      if (error) {
        console.error('Validation error:', error.details);
    
        const errorMessages = error.details.map(detail => detail.message);
    
        return response.status(400).json({ 
          success: false,
          message: 'Validation failed',
          errors: errorMessages 
        });
      }

      const salt = await bcrypt.genSalt(11);
      const hashedPassword = await bcrypt.hash(value.password, salt);

      const user = new User({ 
        username: value.username, 
        password: hashedPassword, 
        email: value.email 
      });

      console.log(user)
      await user.save();
      res.send('ลงทะเบียนเรียบร้อยแล้ว');
      response.status(201).json({ message: 'User created successfully', data: value });
    } catch (error) {
      console.error('Error register:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default new AuthController();

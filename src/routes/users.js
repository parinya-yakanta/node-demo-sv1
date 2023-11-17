import express from 'express';
import authenticationMiddleware from '../middleware/authenMiddleware.js';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', authenticationMiddleware, UserController.createUser);

export default router;
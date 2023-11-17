import express from 'express';
import AuthController from '../controllers/AuthController.js';
import { checkRequestBody } from '../helpers/checkRequestBody.js';

const router = express.Router();

router.post('/register', checkRequestBody, AuthController.register);

export default router;


import express from 'express';
import authenticationMiddleware from '../middleware/authenMiddleware.js';
import PillController from '../controllers/PillController.js';

const router = express.Router();

router.get('/', PillController.getAllPills);
router.post('/', authenticationMiddleware, PillController.createPill);

export default router;
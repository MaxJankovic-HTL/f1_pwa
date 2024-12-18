import express from 'express';
import * as controller from '../../controller/trackController.js';

const router = express.Router();

router.get('/test', controller.getTest);
router.get('/', controller.getAll);

export default router;

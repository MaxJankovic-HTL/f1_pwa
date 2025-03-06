import express from 'express';
import * as controller from '../../controller/trackController.js';

const router = express.Router();

router.get('/test', controller.getTest);
router.get('/', controller.getAll);
router.delete('/:id', controller.deleteTrack);
router.patch('/:id', controller.updateTrackName);
router.post('/', controller.createTrack);

export default router;

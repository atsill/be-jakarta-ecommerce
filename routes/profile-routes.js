import express from 'express';
import { getMyProfile, getProfileById } from '../controllers/profile-controllers.js';

const router = express.Router();

router.get('/me', getMyProfile);

/* REQUEST PARAMETER */
//router.get('/:userId', getProfileById);

/* QUERY PARAMETER */
router.get('/', getProfileById)

export default router;
import express from 'express';
import {signin, signup} from '../controller/auth_controller.js';

const router=express.Router();

router.post('/sign-up',signup)
router.get('/sign-in',signin)

export default router;
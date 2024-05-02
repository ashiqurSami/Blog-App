import express from 'express';
import {signup} from '../controller/auth_controller.js';

const router=express.Router();

router.post('/sign-up',signup)


export default router;
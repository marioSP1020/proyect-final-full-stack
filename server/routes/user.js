import express from 'express';
import { loginUser, registerUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/user/register', registerUser);

userRouter.post('/user/login', loginUser);


export default userRouter;
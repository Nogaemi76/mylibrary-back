import { Router } from 'express';

import UserDao from './userDao';
import UserRepository from './userRepository';
import UserService from './userService';
import UserController from './userController';
import UserRouter from './userRouter';

const router = Router();

const userRepository = new UserRepository(UserDao);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = new UserRouter(router, userController);

export { userRouter };

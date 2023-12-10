import { Request, Response } from 'express';
import { errorFun, success } from '../config/response';
import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
} from './user.service';

export const createUserControllers = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await createUserService(student);
    const message = 'User added successfully';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await getAllUserService();
    const message = 'Find all user successfully';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    const result = await getUserByIdService(id);
    const message = 'Find all user successfully';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  // const userId = req;
  console.log(id);
  try {
    const result = await deleteUserService(id);
    const message = 'Your account successfully deleted';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};

// kon server neya ochit hobe node server er jonno 






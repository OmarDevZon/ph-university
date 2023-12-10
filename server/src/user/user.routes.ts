import express from 'express';
import { createUserControllers, deleteUser, getAllUser, getUserById } from './user.controller';

const router = express.Router();

// well call controllers file
router.post('/', createUserControllers);
router.get('/', getAllUser);
router.get('/:id', getUserById);
router.put('/:id', deleteUser);

export const userRoutes = router;

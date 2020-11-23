import express from 'express';
import {createUser, getUsers, getUserById, deleteUser, patchUser} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/' , getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;
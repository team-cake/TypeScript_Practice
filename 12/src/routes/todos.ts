import { Router } from 'express';
// const express = require('express)
// const Router = express.Router

import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;

// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express'; // much cleaner way

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

// export const createTodo = (req: Request, res: Response, next: NextFunction) => {};
export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todo(Math.random().toString(), text);

	TODOS.push(newTodo);

	res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};

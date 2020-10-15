import React from 'react';
import Todolist from './components/Todolist';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
	const todos = [{ id: 's1', text: 'Land ollie' }];

	const todoAddHandler = (text: string) => {
		console.log(text);
	};

	return (
		<div className='App'>
			<NewTodo onAddTodo={todoAddHandler} />
			<Todolist items={todos} />
		</div>
	);
};

export default App;

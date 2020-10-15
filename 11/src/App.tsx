import React from 'react';
import Todolist from './components/Todolist';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
	const todos = [{ id: 's1', text: 'Land ollie' }];

	return (
		<div className='App'>
			<NewTodo />
			<Todolist items={todos} />
		</div>
	);
};

export default App;

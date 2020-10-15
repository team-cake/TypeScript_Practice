import React from 'react';

const Todolist: React.FC = () => {
	const todos = [{ id: 's1', text: 'Land ollie' }];
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			))}
		</ul>
	);
};

export default Todolist;

import React from 'react';
import Todolist from './components/Todolist';

const App: React.FC = () => {
	const todos = [{ id: 's1', text: 'Land ollie' }];

	return (
		<div className='App'>
			<Todolist items={todos} />
		</div>
	);
};

export default App;

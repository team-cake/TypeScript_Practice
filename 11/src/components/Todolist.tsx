import React from 'react';
import './Todolist.css';
interface TodoListProps {
	items: { id: string; text: string }[];
	onDeleteTodo: (id: string) => void;
}

const Todolist: React.FC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((todo) => (
				<div>
					<li key={todo.id}>
						<span>{todo.text}</span>
						<button onClick={props.onDeleteTodo.bind(null, todo.id)}>
							DELETE
						</button>
					</li>
				</div>
			))}
		</ul>
	);
};

export default Todolist;

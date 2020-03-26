import React from 'react';
import TodoListItem from '../todo-list-items/todo-list-items';
import  "./todo-list.scss"

const TodoList = ({todos, onToggleImportant,onToggleDone, onDeleted}) => {
    const elementsList = todos.map((item) => {
        const { id, ...itemProps } = item;
    return (
        <li key={id} className="list-group-item" >
            <TodoListItem
                {...itemProps}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                onDeleted={ () => onDeleted(id) }
            />
        </li>
    );
});
    return (
        <ul className="list-group todo-list text-center">
            {elementsList}
        </ul>
    );
};


export default TodoList;
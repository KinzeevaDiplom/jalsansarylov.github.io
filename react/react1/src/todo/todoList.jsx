import React from 'react';
import TodoItem from './todoItem';

export default function TodoList(props) {
    return(
        <ul className = 'todo-list'>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem key = {todo.id} todo = {todo} index={index + 1} /> 
                })
            }                
        </ul>
    )
};
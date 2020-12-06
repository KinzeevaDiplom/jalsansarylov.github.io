import React from 'react'
import TodoList from './todoList'


export default function Todo() {
    let todos = [
        {id: 1, title: 'хлеб'}, 
        {id: 2, title: 'сахар'}, 
        {id: 3, title: 'макароны'} 
    ]
    
    return(
        
        <div className = 'todo'>
            <h2>список продуктов</h2>
            <div className = 'line'></div>
            <TodoList todos = {todos} />
        </div>
    )
    
}
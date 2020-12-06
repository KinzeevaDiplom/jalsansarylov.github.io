import React from 'react'

export default function TodoItem({todo, index}) {
    return(
        <li>{index +' '+ todo.title}</li>     
        
    )
    
}
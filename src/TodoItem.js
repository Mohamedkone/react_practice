import React from 'react'
import './style.css'
function TodoItem(){
    return (
        <div className="todo-item">
            <input type='checkbox'/>
            <p>Place a text here</p>
        </div>
    )
}

export default TodoItem;
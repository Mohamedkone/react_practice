import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import './style.css'
function App(){

    const mylist = todosData.map(item => <TodoItem key={item.id} list={item} />)

    return (
        <div className="todo-list">
            {mylist}
        </div>
    );
}

export default App;
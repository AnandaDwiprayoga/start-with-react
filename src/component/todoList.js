import React from 'react'
import Todo from "./todo";

const TodoList = ({todos, todosState}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        todosState={todosState} 
                        />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
import React from 'react'

const Todo = ({ todo : todoProp , todosState}) => {
    const onButtonDeleteCliked = (e) => {
        e.preventDefault();

        todosState(todos => todos.filter(todo => todo.id !== todoProp.id));
    }

    const onCompleteButtonCliked = (e) => {
        e.preventDefault();

        todosState(todos => (
            todos.map(todo => todo.id === todoProp.id ? {...todo, completed: !todo.completed } : todo)
        ));
    }

    return (
        <div className={`todo  ${todoProp.completed ? "completed" : ""}`}>
            <li className="todo-item">{todoProp.text}</li>
            <button onClick={onCompleteButtonCliked} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={onButtonDeleteCliked} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
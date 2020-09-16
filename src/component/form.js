import React from "react";


const Form = ({inputText, inputTextState, todosState, filterState}) => {
    const onInputChange = (e) => {
        const text = e.target.value;
        inputTextState(text);
    }

    const onButtonAddClicked = (e) => {
        e.preventDefault();
        todosState(todos => [
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);

        inputTextState("");
    }

    const onFilterOptionsChanged = (e) => {
        const filter = e.target.value;

        filterState(filter);
    }

    return (
        <form>
            <input value={inputText}  onChange={onInputChange} type="text" className="todo-input" />
            <button  onClick={onButtonAddClicked} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={onFilterOptionsChanged} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

export default Form;
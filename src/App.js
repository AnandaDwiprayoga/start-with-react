import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, TodoList} from "./component/index";

const App = () => {

  const [inputText, inputTextState ] = useState("");
  const [todos, todosState] = useState([]);
  const [filter, filterState ] = useState("all");
  const [filteredTodos, filteredTodosState] = useState(todos);

  const filterTodo = () => {
     switch(filter){
       case "completed" : 
            filteredTodosState(todos.filter(todo => todo.completed));
            break;
       case "uncompleted" : 
            filteredTodosState(todos.filter(todo => !todo.completed));
            break;
        default : 
            filteredTodosState(todos);
     };
  };

  //use effect otomatis akan menjalankan callback (parameter pertama) ketika terdapat perubahan state (paramter kedua. parameter kedua array bisa lebih dari satu state)
  useEffect(() => {
    filterTodo();
  }, [filter, todos]);

  return (
    <div className="App" > 
      <header>
          <h1>Yoga's Todo List</h1>
      </header>
      <Form 
          inputText={inputText}
          inputTextState={inputTextState} 
          todosState={todosState}
          filterState={filterState}
          />
      <TodoList 
          todos={filteredTodos}
          todosState={todosState}
        />
   </div>
  );
};

export default App;


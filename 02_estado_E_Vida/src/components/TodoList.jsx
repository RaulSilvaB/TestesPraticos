import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTodos([...todos, { id: Math.random(), task: task }]);
    setTask("");
  };

  function removeTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="digite uma tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Adicionar</button>

        <h4>
          Filtro:{" "}
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <ul>
            {todos
              .filter((todo) => todo.task.includes(filter))
              .map((todo) => (
                <li key={todo.id}>
                  {todo.task}{" "}
                  <button onClick={() => removeTask(todo.id)}>Del</button>{" "}
                </li>
              ))}
          </ul>
        </h4>
      </form>
    </div>
  );
};

export default TodoList;

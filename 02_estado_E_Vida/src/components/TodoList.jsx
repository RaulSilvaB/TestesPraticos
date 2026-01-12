import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

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
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => removeTask(todo.id)}> remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

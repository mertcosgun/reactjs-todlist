export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <button
        onClick={() => {
          if (todoValue !== "") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
}

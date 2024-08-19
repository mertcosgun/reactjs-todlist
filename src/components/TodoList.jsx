import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} todoIndex={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

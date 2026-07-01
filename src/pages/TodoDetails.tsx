import { useLoaderData, useParams } from "react-router";

const TodoDetails = () => {
  const { id } = useParams();
  const todo = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Todo Details</h1>
      <p>
        <strong>ID:</strong> {id}
        {/* <strong>ID:</strong> {todo.id} */}
      </p>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default TodoDetails;

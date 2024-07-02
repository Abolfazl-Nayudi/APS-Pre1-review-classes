import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import TodoShow from "../components/TodoShow/TodoShow";
import { fetchTodos, createTodo } from "../redux/slices/todo.slice";
import { useDispatch, useSelector } from "react-redux";

// const todos = [
//   {
//     title: "Buy groceries",
//     description: "Milk, Bread, Eggs, Butter",
//     isCompleted: false,
//     _id: "60d0fe4f5311236168a109ca",
//   },
//   {
//     title: "Finish project report",
//     description: "Complete the final report for the project",
//     isCompleted: true,
//     _id: "60d0fe4f5311236168a109cb",
//   },
//   {
//     title: "Call the plumber",
//     description: "Fix the leaking sink in the kitchen",
//     isCompleted: false,
//     _id: "60d0fe4f5311236168a109cc",
//   },
//   {
//     title: "Book flight tickets",
//     description: "Book tickets for the family vacation",
//     isCompleted: true,
//     _id: "60d0fe4f5311236168a109cd",
//   },
//   {
//     title: "Read a book",
//     description: 'Finish reading "To Kill a Mockingbird"',
//     isCompleted: false,
//     _id: "60d0fe4f5311236168a109ce",
//   },
// ];

export default function Todos() {
  const initialValue = { title: "", description: "" };
  const [data, setData] = useState(initialValue);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const { todos, loading, error } = useSelector((state) => state.todo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTodo({ data, token }));
    console.log("submited");
  };

  // show the created todos in the pages when the component rendered

  useEffect(() => {
    const start = async () => {
      dispatch(fetchTodos(token));
    };
    start();
  }, []);

  return (
    <>
      <section className="d-flex justify-content-center mt-5 ">
        <Form className="w-50 d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="write a title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>write a description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit" className="align-self-center w-50">
            Add Todo
          </Button>
        </Form>
      </section>

      <section
        className="d-flex flex-column align-items-center gap-3 justify-content-center mt-5"
        style={{ minHeight: "450px" }}
      >
        {loading ? (
          <Spinner
            animation="border"
            role="status"
            style={{ width: "24px", height: "24px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          todos.map((todo, index) => {
            return <TodoShow data={todo} key={index} />;
          })
        )}
      </section>
    </>
  );
}

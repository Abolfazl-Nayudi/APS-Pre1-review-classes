import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteTodo } from "../../redux/slices/todo.slice";
import { useDispatch } from "react-redux";
export default function TodoShow({ data }) {
  const { title, description, isCompleted, _id } = data;

  const dispatch = useDispatch();

  return (
    <div className="w-75">
      <Card className="d-flex flex-row align-items-center p-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="d-flex gap-2">
          <span style={{ cursor: "pointer" }}>
            <i
              style={{ fontSize: 20 }}
              className="bi bi-pen-fill text-primary"
            ></i>
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteTodo(_id));
            }}
          >
            <i
              style={{ fontSize: 20 }}
              className="bi bi-trash-fill text-danger"
            ></i>
          </span>
        </div>
      </Card>
    </div>
  );
}

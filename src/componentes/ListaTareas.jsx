import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas, onDelete }) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea, index) => (
        <ItemTarea key={index} tarea={tarea} index={index} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
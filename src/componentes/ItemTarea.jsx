import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, onDelete, index }) => {
  console.log("tarea:", tarea);

  const handleBorrar = () => {
    onDelete(index);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
     
  <div>
    <p>{tarea}</p>
  </div>
      <Button variant="danger" onClick={handleBorrar}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;

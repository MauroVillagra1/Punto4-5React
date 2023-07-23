import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
    // Obtener la lista de tareas del localStorage al cargar el componente
    const storedTareas = JSON.parse(localStorage.getItem("tareas"));
    console.log(listaTareas);
    if (storedTareas) {
      setListaTareas(storedTareas);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que la tarea no esté vacía antes de agregarla
    if (tarea.trim() !== "") {
      // Guardar la tarea en el array listaTareas
      setListaTareas([...listaTareas, tarea]);
      // Limpiar el valor del input
      setTarea("");
    }
  };

  const handleBorrarTarea = (indexABorrar) => {
    // Copiar la lista de tareas actual
    const nuevasTareas = [...listaTareas];
    // Eliminar la tarea seleccionada por índice
    nuevasTareas.splice(indexABorrar, 1);
    // Actualizar la lista de tareas con la tarea eliminada
    setListaTareas(nuevasTareas);
  };

  useEffect(() => {
    // Guardar la lista de tareas en el localStorage cada vez que se actualice, excepto al cargar el componente
    if (listaTareas.length > 0) {
      localStorage.setItem("tareas", JSON.stringify(listaTareas));
    }
  }, [listaTareas]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      {/* Pasa la lista de tareas y la función handleBorrarTarea como props */}
      <ListaTareas listaTareas={listaTareas} onDelete={handleBorrarTarea} />
    </>
  );
};

export default FormularioTarea;

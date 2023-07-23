import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem("tareas"));
    console.log(listaTareas);
    if (storedTareas) {
      setListaTareas(storedTareas);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim() !== "") {
      setListaTareas([...listaTareas, tarea]);
      setTarea("");
    }
  };

  const handleBorrarTarea = (indexABorrar) => {
    setListaTareas(prevListaTareas => prevListaTareas.filter((_, index) => index !== indexABorrar));
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

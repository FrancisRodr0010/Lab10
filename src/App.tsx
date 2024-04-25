import './App.css';
import React, { useState } from 'react'; // Importa useState desde React

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';

// FRANCISCO ANDRÉS RODRÍGUEZ HERNÁNDEZ
// CARNÉ: 22001828

function app() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  // CONTROL PARA BORRAR TAREAS
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
    console.log('task deleted');
    setCount(count - 1);
  };

  // CONTROL PARA AGREGAR TAREAS (ID PARA ESPECIFICAR QUE TAREA ELIMINAR)
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + 1);
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };

    setTasks([...tasks, addTask]);
    setInput('');
  };

  return (
    <Stack direction="horizontal" gap={3}>
      <div className="container my-5">
        <h4 className="title-page"> Task DashBoard</h4>
        <h5 className="title-page"> No. de tareas: {count} </h5>
        <form onSubmit={handleSubmit}>
          <Form.Control
            value={input}
            className="me-auto"
            placeholder="Type a task..."
            type="text"
            onChange={(event) => setInput(event.target.value)} // Corregido el manejo del cambio
          />
          <p></p>
          <Button variant="secondary" type="submit">
            Add task
          </Button>{' '}
          {/* Añadido type="submit" para que el botón realice el envío del formulario */}
        </form>
        <p></p>
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              {' '}
              {}
              <p>
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    {task.text + ''}{' '}
                    <Button
                      variant="danger"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>{' '}
                  </ListGroup.Item>
                </ListGroup>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Stack>
  );
}

export default app;

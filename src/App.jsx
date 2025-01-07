import { useState } from 'react';
import './App.css';
import { Task } from './components/Task';
import { Form } from './components/Form';

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tarea.trim() === '') {
      console.log('Debes agregar una tarea');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false,
    };

    setTareas([nuevaTarea, ...tareas]);
    setTarea('');
  };

  const deleteTask = (id) => {
    const tareasActualizadas = tareas.filter((t) => t.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <h2>Task List React</h2>
      <Form handleChange={handleChange} addTask={addTask} tarea={tarea} />
      {tareas.map((t) => (
        <Task
          key={t.id}
          id={t.id}
          tarea={t.tarea}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}

export default App;
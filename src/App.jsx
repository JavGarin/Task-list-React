import { useState } from 'react'
import './App.css'
import { Task } from './components/Task'
import { Form } from './components/Form'

function App() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleChange = (e) => {
    setTarea(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if(tarea.trim() === '') {
      console.log('Debes agregar una tarea')
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    }

    const totalTareas = [nuevaTarea,...tareas]
    setTareas(totalTareas)
    setTarea('')
  }

  return (
    <>
      <h2>Todo list</h2>
      <Form
        handleChange={handleChange}
        addTask={addTask}
        tarea={tarea}
        />
    </>
  )
}

export default App

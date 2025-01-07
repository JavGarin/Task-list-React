import React, { useState } from 'react';
import '../Task.css';

const Task = ({ tarea, id, deleteTask }) => {
    const [completada, setCompletada] = useState(false);

    return (
    <div
        className={
        completada
            ? 'containerTarea containerTareaCompletada'
            : 'containerTarea'
        }
    >
        <h2 className={completada ? 'completada' : 'noCompletada'}>{tarea}</h2>
        <button
        id="completar"
        onClick={() => setCompletada(!completada)}
        >
        {completada ? 'No completada' : 'Completada'}
        </button>
        <button onClick={() => deleteTask(id)} id="eliminar">
        Eliminar
        </button>
    </div>
    );
};

export { Task };

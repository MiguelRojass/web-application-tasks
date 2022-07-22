import React, { useEffect, useState } from 'react'
import { Contact } from '../../models/contact/contact.class';
import { LEVELS } from '../../models/levels.enum';
import { ONLINE } from '../../models/contact/online.enum';
import { Task } from '../../models/task.class';
import ContactComponent from '../pure/contact';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

  const defaultTask = new Task('Miguel', 'Esta es una descripcion', false, LEVELS.NORMAL);

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified');
    setLoading(false);
    return() => {
      console.log('Task state is going to unmount...');
    }
  }, [tasks])

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  }

  const defaultState = new Contact('Juan Jose', 'Rojas', 'juanjorojast12@gmail.com', ONLINE.ONLINE)

  return (
    <div>
      <div>
        Your tasks:
      </div>
      {/* Por hacer: Aplicar un For/Map para renderizar una lista de tareas */}
      <TaskComponent task={defaultTask} />
      <ContactComponent contact={defaultState} />
    </div>
  );
};

export default TaskListComponent;
import React from 'react'
import { Contact } from '../../models/contact/contact.class';
import { LEVELS } from '../../models/levels.enum';
import { ONLINE } from '../../models/contact/online.enum';
import { Task } from '../../models/task.class';
import ContactComponent from '../pure/contact';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

  const defaultTask = new Task('Miguel', 'Esta es una descripcion', false, LEVELS.NORMAL);

  const changeState = (id) => {
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
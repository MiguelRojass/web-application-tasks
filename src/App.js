import logo from './logo.svg';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import { ClassToFunction, Clock } from './hooks/lifecycle/ClassToFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* Todo lo que hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Miguel">   
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        <ClassToFunction />
      </header>
    </div>
  );
}

export default App;

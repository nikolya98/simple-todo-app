import style from "./App.module.scss";
import AddTask from "./components/AddTask";
import TaskListControl from "./components/TaskListControl";
import TaskListContextProvider from "./contexts/TaskListContext.jsx";

function App() {
  return (
    <TaskListContextProvider>
      <div className={style.container}>
        <AddTask />
        <div className={style.wrapper}>
          <TaskListControl />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;

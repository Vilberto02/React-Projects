import "./App.css";

function App() {
  return (
    <>
      <div className="sidebar">
        <header className="logo">
          <a href="#">
            <img src="" alt="TaskList-Logo" />
            Task List
          </a>
        </header>
        <nav className="navigation">
          <ul className="list__items">
            <li>
              <a href="#">Tareas</a>
            </li>
            <li>
              <a href="#">Importantes</a>
            </li>
            <li>
              <a href="#">Completadas</a>
            </li>
            <li>
              <a href="#">Incompletas</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;

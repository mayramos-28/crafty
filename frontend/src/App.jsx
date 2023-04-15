import { RegistrationPage } from "./components/forms/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";
import { LoginPage } from "./components/forms/LoginPage";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* <li>
            <Link to="/RegistrationPage">Registro</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/login" Component={LoginPage}/>

          <Route path="/" element={<h1>Inicio</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;

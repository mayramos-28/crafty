import { RegistrationPage } from "./components/forms/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";
import "./assets/style/categoryBackground.css";
import { MainPage } from "./components/main/MainPage";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <div className="App">
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;

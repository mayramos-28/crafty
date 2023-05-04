import { RegistrationPage } from "./components/forms/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";
import "./assets/style/categoryBackground.css";
import { MainLayout } from "./layout/MainLayout";
import { FooterLayout } from "./layout/FooterLayout";

function App() {
  return (
    <>
      <div className="App d-flex flex-column">
        <MainLayout></MainLayout>
        <FooterLayout></FooterLayout>
      </div>
    </>
  );
}

export default App;

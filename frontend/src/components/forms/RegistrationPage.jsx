import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/register/registerSlice";
import { registerUserThunk } from "../../store/slices/register/registerThunk";
import { Input } from "./Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, success, user } = useSelector((state) => state.register);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserThunk(user));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  return (
    <div className="container-fluid d-flex justify-content-center h-100">
      <div className="form-center-container">
        <h2>Registro</h2>
        <Form name="form" onSubmit={handleSubmit} className="form-display">
          <Input
            key="registerName"
            label="Nombre completo"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <Input
            key="registerEmail"
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <Input
            key="registerEmailConfirm"
            label="Confirmar email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <Input
            key="registerPassword"
            label="Contraseña"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
          <Input
            key="registerPasswordConfirm"
            label="Confirmar contraseña"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />

          <Button variant="primary" type="submit" className="form-btn">
            Registrarme
          </Button>
        </Form>
        {isLoading && <Spinner />}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
    
      </div>     
    </div>
  );
};

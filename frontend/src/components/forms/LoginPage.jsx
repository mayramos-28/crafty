import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slices/login/loginThunk";
import { setUser } from "../../store/slices/login";
import { Input } from "./Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, success, user } = useSelector(
    (state) => state.login
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserThunk(user));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  return (
    <div className="container-fluid d-flex justify-content-center h-100 ">
      <div className="form-center-container">
        <h2>Iniciar sesión</h2>
        <Form name="form" onSubmit={handleSubmit} className="form-display">
          <Input
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
          <Button variant="primary" type="submit" className="form-btn">
            Iniciar sesión
          </Button>
        </Form>
        {isLoading && <Spinner />}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
      </div>
    </div>
  );
};

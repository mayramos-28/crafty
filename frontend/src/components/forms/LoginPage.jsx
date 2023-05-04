import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slices/login/loginThunk";
import { setUser } from "../../store/slices/login";
import { Input } from "./Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, success, user } = useSelector(
    (state) => state.login
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(user));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({ ...user, [name]: value }));
  };
  const isLogged = localStorage.getItem("token") !== null;
  
  if (isLogged) {
    return <Navigate to="/profile/my-area" />;
  }
  return (
    <div className="container-fluid d-flex justify-content-center h-100">
      <div className="form-center-container">

        <Form name="form" onSubmit={handleSubmit} className="form-display">
          <Form.Label>Iniciar sesión</Form.Label>
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



}
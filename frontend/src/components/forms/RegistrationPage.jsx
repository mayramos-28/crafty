import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/register/registerSlice";
import { registerUserThunk } from "../../store/slices/register/registerThunk";
import { Input } from "./Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

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

  if (isLoading) return (<Spinner animation="border" variant="primary" />)
  if(success) return ( <Navigate to="/profile/my-area" />)

  return (

    <Row className='d-flex justify-content-center flex-column align-content-center py-5'>
      <Col sm={11} md={4} lg={3}>
        <h2>Formulario de Registro</h2>
        <Form className="form-control " onSubmit={handleSubmit} >
         
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

          <Button type="submit" className="btn-login">
            Registrarme
          </Button>
        </Form>
      </Col>
    </Row>



  );
};

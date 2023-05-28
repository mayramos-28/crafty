import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slices/login/loginThunk";
import { setUser } from "../../store/slices/login";
import { Input } from "./Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";



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
  if (isLoading) {
    return (
        <div className='d-flex justify-content-center align-content-center'>

            <Spinner animation="border" variant="info" as="div" role="status" style={{ fontWeight: '80rem' }} />
        </div>)
}
return (
    <>

      <Row className='d-flex justify-content-center flex-column align-content-center h-100 py-5'>
        <Col sm={11} md={4} lg={3}>
          <h2>Inicio de sesión</h2>
        <Form className="form-control py-5" onSubmit={handleSubmit}>
      
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
        <Button variant="primary" type="submit" className="btn-login">
          Iniciar sesión
        </Button>
      </Form>
      <div>
        
        {error && <div className='error'>
          <p>{error} </p>
        </div>}
        {success && <div className="success">{success}</div>}
      </div>
        </Col>
      </Row>
    </>

  );



}
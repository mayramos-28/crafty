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

  if(isLoading) return (<Spinner animation="border" variant="primary" />)

  return (
    
        <Form className="conrm-control container-login" onSubmit={handleSubmit} >
        <Form.Label>Formulario de Registro</Form.Label>
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

          <Button  type="submit" className="btn-login">
            Registrarme
          </Button>
        </Form>
        
        
      
  );
};

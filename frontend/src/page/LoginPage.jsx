import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../store/slices/login/loginThunk";
import { setUser } from "../store/slices/login";
import { Input } from "../components/forms/Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { LoginFormComponent } from "../components/forms/LoginFormComponent";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, success, user } = useSelector(
    (state) => state.login
  );


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

      <div className='col-sm-12 col-md-8 col-lg-5' >     

        <LoginFormComponent
          key={user.id}
          btnValue={'Iniciar sesión'}
          labelValue={'Inicio de sesión'}
          user={user}
          onSubmit={values => {
            dispatch(loginUserThunk(values));
          }}
        />


      </div>
    </>

  );



}